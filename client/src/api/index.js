import axios from "axios";

const url = "https://zeenux.herokuapp.com/api/transactions";

export const fetchTransactions = () => axios(url);
export const addTransaction = (newTransaction) => axios.post(url, newTransaction);
export const deleteTransaction = (id) => axios.delete(`${url}/${id}`);
