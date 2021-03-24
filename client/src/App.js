/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import axios from 'axios'
// import Header from './components/ui/Header'
// import Search from './components/ui/Search'
import "./App.css";
import { AppNavbar } from "./components/ui/AppNavbar";
import { ExpTrk } from "./components/ExpTrk";
import { useDispatch } from "react-redux";
import { loadUser } from "./actions/authAction";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  return (
    <div>
      <AppNavbar />
      {/* <Header />
      <Search /> */}
      <ExpTrk />
    </div>
  );
};

export default App;
