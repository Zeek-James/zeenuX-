import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  Button,
  Form,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "reactstrap";
import { addTransaction } from "../../actions/transactionActions";
export const AddTransaction = () => {
  const [modal, setModal] = useState(false);

  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [bank, setBank] = useState("");
  const [amount, setAmount] = useState(0);

  const dispatch = useDispatch();

  const toggle = () => setModal(!modal);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTransaction = {
      name,
      text,
      bank,
      amount: +amount,
    };
    dispatch(addTransaction(newTransaction));
    setName("");
    setText("");
    setBank("");
    setAmount("");
    toggle();
  };

  return (
    <div className="m-4 ad">
      <Button className="rounded-circle mr-5" color="dark" onClick={toggle}>
        <h1>+</h1>
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Add new transaction</ModalHeader>
        <ModalBody>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label for="text">name</Label>
              <Input
                type="text"
                name="name"
                id="name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                placeholder="..."
              />
            </FormGroup>
            <FormGroup>
              <Label for="text">Text</Label>
              <Input
                type="text"
                name="text"
                id="text"
                value={text}
                onChange={(e) => {
                  setText(e.target.value);
                }}
                placeholder="Enter text..."
              />
            </FormGroup>
            <FormGroup>
              <Label for="text">Bank (Optional)</Label>
              <Input
                type="text"
                name="bank"
                id="bank"
                value={bank}
                onChange={(e) => {
                  setBank(e.target.value);
                }}
                placeholder="Enter text..."
              />
            </FormGroup>
            <FormGroup>
              <Label for="amount">
                Amount
                <br /> (negative - expense, positive - income)
              </Label>
              <Input
                type="number"
                name="amount"
                id="amount"
                value={amount}
                onChange={(e) => {
                  setAmount(e.target.value);
                }}
                placeholder="Enter amount..."
              />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="dark" type="submit" onClick={handleSubmit}>
            Add Transaction
          </Button>
          <Button color="danger" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};
