import { useState } from "react";
import ExpenseItem from "./components/expense/ExpenseItem";
import AddNewExpense from "./components/AddExpense/AddNewExpense";
import Card from "./components/UI/Card";
import FilterExpenses from "./components/filterExpense/FilterExpenses";
import "./app.css";

const expenseData = [
  {
    id: "u1",
    date: new Date(2025, 2, 8),
    title: "Books",
    amount: 50.99,
  },
  {
    id: "u2",
    date: new Date(2024, 3, 23),
    title: "Home Improvements",
    amount: 800.69,
  },
  {
    id: "u3",
    date: new Date(2020, 7, 13),
    title: "Car Insurance",
    amount: 300.51,
  },
  {
    id: "u4",
    date: new Date(2021, 5, 22),
    title: "New Desk (Wooden)",
    amount: 450.0,
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(expenseData);
  const [selectedYear, setSelectedYear] = useState("all");

  const yearSelectedHandler = (year) => {
    setSelectedYear(year);
  };

  const expenseDataHandler = (expense) => {
    setExpenses((prevExpense) => {
      return [expense, ...prevExpense];
    });
  };

  // Filter expenses for the selected year or show all if "all" is selected
  const filteredExpenses =
    selectedYear === "all"
      ? expenses
      : expenses.filter(
          (item) => item.date.getFullYear().toString() === selectedYear
        );

  return (
    <div className="App">
      <Card className="add-expenses">
        <AddNewExpense onAddExpense={expenseDataHandler} />
      </Card>
      <Card className="filter-expenses">
        <FilterExpenses
          onSelectingYear={yearSelectedHandler}
          updatedExpenses={expenses}
        />
      </Card>
      <Card className="expenses">
        {filteredExpenses.length > 0 &&
          filteredExpenses.map((item) => {
            return (
              <ExpenseItem
                key={item.id}
                date={item.date}
                title={item.title}
                amount={item.amount}
              />
            );
          })}
        {filteredExpenses.length === 0 && (
          <p>No Data found for the selected Year.</p>
        )}
      </Card>
    </div>
  );
};

export default App;
