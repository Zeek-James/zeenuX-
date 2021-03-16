import React from "react";
import { Container} from "reactstrap";
import "../expTrk.css";
import { useSelector } from "react-redux";
import { Transaction } from "./Transaction";

export const TransactionList = () => {
  const transactions = useSelector((state) => state.transactions);
  


  return  (
    <div className='mr-3 hty_Container'>
      <Container tag="h3" className="ml-5">
        History
      </Container>
      <Container className='p-3 scrollbar scrollbar-primary mr-5'>
      {transactions.map((transaction) => (
          <Transaction
            className="m-4 right-col"
            transaction={transaction}
            key={transaction._id}
          />
          ))}
          </Container>
    </div>
  );
};
