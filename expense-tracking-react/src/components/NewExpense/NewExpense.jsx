import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const saveExpenseDateHandler = function (enteredExpenseData) {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsOpen(false)

  };
  const openFormHandler = function () {
    setIsOpen(true);
  };

  const editFormHandler = function (entered) {
    setIsOpen(entered)
  }

  return (
    <div className="new-expense">
      {!isOpen && <button onClick={openFormHandler}>Add New Expense</button>}

      {isOpen && (
        <ExpenseForm onSaveExpenseData={saveExpenseDateHandler} onEditForm={editFormHandler} />
      )}
    </div>
  );
};

export default NewExpense;
