import React, { useState } from "react";
import moment from "moment";
import { Button, Card, CardBody, Collapse, Container } from "reactstrap";
import { NWC } from "../../../utils/format";
import { useDispatch } from "react-redux";
import { deleteTransaction } from "../../../actions/transactionActions";

export const Transaction = ({ transaction }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const ld = transaction.amount;
  const dispatch = useDispatch();
  const sign = transaction.amount < 0 ? "-" : "";
  const border = transaction.amount < 0 ? "border-danger" : "border-success";

  return !ld ? (
    <></>
  ) : (
    <Container
      className={`shadow-lg transCont border mb-2 p-2 border ${border}`}
    >
      <Button
        type="button"
        className="close ml-3 mr-1 transDel_Btn"
        onClick={() => {
          dispatch(deleteTransaction(transaction._id));
        }}
        // aria-label="Close"
      >
        <span aria-hidden="true">&times;</span>
      </Button>
      <Container>
        <div className="text-secondary mb-1 d-flex justify-content-between">
          {transaction.name}
          <h6>{moment(transaction.createdAT).fromNow()}</h6>
        </div>
        <div>
          <Button
            className="dtls"
            color="dark"
            onClick={toggle}
            style={{ marginBottom: "1rem" }}
          >
            View Details
          </Button>
          <Collapse isOpen={isOpen}>
            <Card>
              <CardBody>{transaction.text}</CardBody>
            </Card>
          </Collapse>
        </div>
        <div className="d-flex justify-content-between pr-3 mt-1">
          <p>{transaction.bank} Bank</p>
          <h5>
            {sign}NGN {NWC(Math.abs(transaction.amount))}
          </h5>
        </div>
      </Container>
    </Container>
  );
};
