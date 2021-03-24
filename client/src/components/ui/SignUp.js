import {
  Alert,
  Button,
  Form,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  NavLink,
} from "reactstrap";

import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signUp } from "../../actions/authAction";
export const SignUp = () => {
  const [modal, setModal] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //   const [userName, setUserName] = useState("");
  const [msg, setMsg] = useState(null);

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const error = useSelector((state) => state.error);
  // console.log(error);
  const dispatch = useDispatch();
  const toggle = useCallback(
    () => {
        setMsg(null)
        setModal(!modal);
      } ,
    [modal],
  )

  const handleSubmit = (e) => {
    e.preventDefault();

    //   Create user object
    const newUser = {
      name,
      email,
      password,
    };

    //   Attemp to SignUp
    dispatch(signUp(newUser));
    setName("");
    setPassword("");
    setEmail("");
  };

  useEffect(() => {
    if (error.id === "REGISTER_FAIL") {
      setMsg(error.msg.msg);
    } else {
      setMsg(null);
    }


  }, [error]);

  useEffect(() => {
    if(modal){
      if(isAuthenticated){
        toggle()
      }
    }    
  },[ modal,toggle, isAuthenticated])

  return (
    <div>
      <NavLink onClick={toggle} href="#">
        Sign Up
      </NavLink>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Sign Up</ModalHeader>
        <ModalBody>
          {msg ? <Alert color="danger">{msg}</Alert> : null}
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label for="name">Name</Label>
              <Input
                type="text"
                name="name"
                id="name"
                className="mb-3"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                placeholder="Name"
              />

              <Label for="email">Email</Label>
              <Input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                className="mb-3"
                placeholder="Email"
              />

              <Label for="password">Password</Label>
              <Input
                type="password"
                name="password"
                id="password"
                className="mb-3"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                placeholder="Password"
              />
              {/* 
              <Label for="username">
                User Name
              </Label>
              <Input
                type="text"
                name="username"
                className='mb-3'
                id="username"
                value={userName}
                onChange={(e) => {
                  setUserName(e.target.value);
                }}
                placeholder="User name"
              />
            */}
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="dark" type="submit" onClick={handleSubmit}>
            SignUp
          </Button>
          <Button color="danger" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};
