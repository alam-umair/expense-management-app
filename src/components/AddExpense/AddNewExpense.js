import ExpenseForm from "./ExpenseForm";
import "./addNewExpense.css";
const AddNewExpense = (props) => {
  const saveExpenseDataHandler = (expenseData) => {
    expenseData = { ...expenseData, id: Math.random().toString() };
    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <h1>Add New Expense</h1>
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default AddNewExpense;
