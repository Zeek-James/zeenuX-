/* eslint-disable import/no-anonymous-default-export */
import {
  GET_TRANSACTIONS,
  ADD_TRANSACTION,
  DELETE_TRANSACTION,
  TRANSACTION_ERROR,
} from "../actions/types";

const initialState = [];
// const initialState = {
//   transactions: [],
//   error: null,
//   loading: true
// };

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_TRANSACTIONS:
      return action.payload
      // {
        // ...state,
        // loading: false,
        // transactions: action.payload,
      // };
    case ADD_TRANSACTION:
      return [...state, action.payload]


    case DELETE_TRANSACTION:
      return  state.filter((transaction) => transaction._id !== action.payload)
      

    case TRANSACTION_ERROR:
      return {
        ...state,
        error: action.payload
      }

    default:
      return state;
  }
}
