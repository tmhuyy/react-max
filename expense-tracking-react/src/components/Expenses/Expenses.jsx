import { useState } from "react";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpenseList from "./ExpenseList";
const Expenses = (props) => {
  const { expenses } = props;
  const [year, setYear] = useState(2021);

  const filterYearHandler = function (enteredYear) {
    setYear(enteredYear);
  };

  const filteredExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear() === year;
  });

  

  // render jsx snipet
  return (
    <Card className="expenses">
      <ExpenseFilter onFilterYear={filterYearHandler} year={year} />
      <ExpenseList filteredExpenses={ filteredExpenses } />
    </Card>
  );
};

export default Expenses;
