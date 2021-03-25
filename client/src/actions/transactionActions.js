import axios from "axios";

import * as api from "../api";
import {
  ADD_TRANSACTION,
  DELETE_TRANSACTION,
  GET_TRANSACTIONS,
  // TRANSACTION_ERROR,
} from "./types";
import { tokenConfig } from "./authAction";
import { returnErrors } from "./errorAction";

export const getTransactions = () => async (dispatch) => {
  try {
    const { data } = await api.fetchTransactions();
    dispatch({
      type: GET_TRANSACTIONS,
      payload: data.data,
    });
  } catch (err) {
    dispatch(returnErrors(err.response.data, err.response.status));
  }
};

export const addTransaction = (transaction) => async (dispatch, getState) => {
  // const config = {
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  // };
  // const base_URL = "https://zeenux.herokuapp.com/api/auth/user";
  const base_URL = "https://zeenux.herokuapp.com/api/transactions";

  try {
    const { data } = await axios.post(
      base_URL,
      transaction,
      tokenConfig(getState)
    );

    // const { data } = await api.addTransaction(
    //   transaction,
    //   tokenConfig(getState)
    // );
    dispatch({
      type: ADD_TRANSACTION,
      payload: data.data,
    });
  } catch (err) {
    dispatch(returnErrors(err.response.data, err.response.status));
  }
};

export const deleteTransaction = (id) => async (dispatch, getState) => {
  const base_URL = `https://zeenux.herokuapp.com/api/transactions/${id}`;

  try {
await axios.delete(
      base_URL,
      tokenConfig(getState)
    );
    // await api.deleteTransaction(id, tokenConfig(getState));
    dispatch({
      type: DELETE_TRANSACTION,
      payload: id,
    });
  } catch (err) {
    dispatch(returnErrors(err.response.data, err.response.status));
  }
};
