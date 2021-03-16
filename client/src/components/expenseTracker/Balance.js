import React from "react";
import { useSelector } from "react-redux";
import { Col } from "reactstrap";
// import "./expTrk.css";

import { NWC } from "../../utils/format";
export const Balance = () => {
  const transactions = useSelector((state) => state.transactions);

  const amounts = transactions.map((transaction) => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0);

  const sign = total < 0 ? "-" : "";
  const color = total < 0 ? "drained" : "balance";

  return !total ? (
    <></>
  ) : (
    <Col
      className={` border shadow  border-secondary rounded-right text-white ${color} mr-5 p-2 d-flex mb-5 align-items-center`}
    >
      <h2 className="mr-auto p-2">You Have</h2>
      <div className="pr-3">
        <h1>Balance</h1>
        <h5>
          {sign}NGN {NWC(Math.abs(total))}
        </h5>
      </div>
    </Col>
  );
};
