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
    dispatch(returnErrors(err.response.data, err.response.status))
  }
};

export const addTransaction = (transaction) => async (dispatch, getState) => {
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
    dispatch(returnErrors(err.response.data, err.response.status))
  }
};

export const deleteTransaction = (id) => async (dispatch, getState) => {
  try {
    await api.deleteTransaction(id, tokenConfig(getState));
    dispatch({
      type: DELETE_TRANSACTION,
      payload: id,
    });
  } catch (err) {
    dispatch(returnErrors(err.response.data, err.response.status))

  }
};
