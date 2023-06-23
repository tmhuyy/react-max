import { useState } from "react";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
const ExpenseItem = (props) => {
  // just js
  const { expense } = props;

  // return html
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={expense.date} />
        <div className="expense-item__description">
          <h2>{expense.title}</h2>
          <Card className="expense-item__price">${expense.amount}</Card>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
