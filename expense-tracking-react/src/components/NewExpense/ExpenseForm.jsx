import { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  //   const [userInput, setUserInput] = useState({
  //     enteredTitle: "",
  //     enteredDate: "",
  //     enteredAmount: "",
  //   });
  // TODO funciton handler
  const titleChangeHandler = function (e) {
    setEnteredTitle(e.target.value);
    // setUserInput((pre) => {
    //   return { ...pre, enteredTitle: e.target.value };
    // });
  };

  const dateChangeHandler = function (e) {
    setEnteredDate(e.target.value);
    // setUserInput((pre) => {
    //   return { ...pre, enteredDate: new Date(e.target.value) };
    // });
  };

  const amountChangeHandler = function (e) {
    setEnteredAmount(+e.target.value);
    // setUserInput((pre) => {
    //   return { ...pre, enteredAmount: +e.target.value };
    // });
  };

  const submitHandler = function (e) {
    e.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);

    setEnteredTitle("");
    setEnteredDate("");
    setEnteredAmount("");

  };

  const closeFormHandler = function () {
    props.onEditForm(false)
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            onChange={titleChangeHandler}
            value={enteredTitle}
            autoFocus
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            name="amount"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
            value={enteredAmount}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            name="date"
            min="2019-01-01"
            step="2022-12-31"
            onChange={dateChangeHandler}
            value={enteredDate}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick={closeFormHandler}>Cancel</button>

        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
