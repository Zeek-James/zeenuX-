import React, { Fragment } from "react";
import { Nav, Navbar, NavbarBrand, NavItem } from "reactstrap";

// import { Hambuger } from "./Hambuger";
import { Logout } from "./Logout";
import { Login } from "./Login";
import { SignUp } from "./SignUp";
import { useSelector } from "react-redux";

export const AppNavbar = () => {
  const { isAuthenticated, user } = useSelector((state) => state.auth);

  const authLinks = (
    <Fragment>
      <NavItem>
        <span className="navbar-text mr-3">
          <strong>{user ? `Welcome ${user.name}` : ""}</strong>
        </span>
      </NavItem>
      <NavItem>
        <Logout />
      </NavItem>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <NavItem>
        <SignUp />
      </NavItem>
      <NavItem>
        <Login />
      </NavItem>
    </Fragment>
  );

  return (
    <div>
      <Navbar color="dark" dark expand="md" className="mb-5 sticky-top">
        <NavbarBrand href="/" tag="h1" className='mr-auto'>
          ZeenuX
        </NavbarBrand>
        <Nav>{isAuthenticated ? authLinks : guestLinks}</Nav>
      </Navbar>

      {/* <Hambuger /> */}
    </div>
  );
};
