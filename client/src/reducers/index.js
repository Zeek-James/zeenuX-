import { combineReducers } from "redux";
import transactions from "./transactions";
import error from "./errorReducer";
import auth from "./authReducer";

export default combineReducers({ transactions, error, auth });
 