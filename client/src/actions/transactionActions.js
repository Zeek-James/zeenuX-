import * as api from "../api";
import {
  ADD_TRANSACTION,
  DELETE_TRANSACTION,
  GET_TRANSACTIONS,
  TRANSACTION_ERROR,
} from "./types";

export const getTransactions = () => async (dispatch) => {
  try {
    const { data } = await api.fetchTransactions();
    dispatch({
      type: GET_TRANSACTIONS,
      payload: data.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const addTransaction = (transaction) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const { data } = await api.addTransaction(transaction, config);
    dispatch({
      type: ADD_TRANSACTION,
      payload: data.data,
    });
  } catch (err) {
    dispatch({
      type: TRANSACTION_ERROR,
      payload: err.response.data.error,
    });
  }
};

export const deleteTransaction = (id) => async (dispatch) => {
  try {
    await api.deleteTransaction(id);
    dispatch({
      type: DELETE_TRANSACTION,
      payload: id,
    });
  } catch (err) {
    dispatch({
      type: TRANSACTION_ERROR,
      payload: console.log(err),
    });
  }
};
