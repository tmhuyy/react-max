import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";
const ExpenseList = (props) => {
  const { filteredExpenses } = props;
  if (filteredExpenses.length === 0) {
    return <h2 className="expenses-list__fallback">NO EXPENSES FOUND!!!</h2>;
  }
  return (
    <ul className="expenses-list">
      {filteredExpenses.map((expense) => {
        return <ExpenseItem expense={expense} key={expense.id} />;
      })}
    </ul>
  );
};

export default ExpenseList;
