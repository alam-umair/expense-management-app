import { useState } from "react";
import Chart from "./BarChart";
import "./filterExpense.css";

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const FilterExpenses = ({ onSelectingYear, updatedExpenses }) => {
  const [selectedYear, setSelectedYear] = useState("all");

  const getSelectedYearHandler = (e) => {
    setSelectedYear(e.target.value);
  };

  // Filter expenses for the selected year
  const updatedExpensesForSelectedYear = updatedExpenses.filter(
    (expense) => expense.date.getFullYear().toString() === selectedYear
  );

  // Count expenses per month
  const dataForSelectedYear = months.reduce((acc, month, idx) => {
    acc[month] = updatedExpensesForSelectedYear.filter(
      (expense) => expense.date.getMonth() === idx
    ).length;
    return acc;
  }, {});

  const filterExpensesHandler = (e) => {
    e.preventDefault();
    onSelectingYear(selectedYear);
  };

  return (
    <div className="filter-container">
      <form className="filter-form" onSubmit={filterExpensesHandler}>
        <select
          className="filter-select"
          onChange={getSelectedYearHandler}
          value={selectedYear}
        >
          <option value="all">All</option>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
          <option value="2024">2024</option>
          <option value="2025">2025</option>
        </select>
        <button className="filter-button" type="submit">
          Filter
        </button>
      </form>
      <Chart data={dataForSelectedYear} />
    </div>
  );
};

export default FilterExpenses;
