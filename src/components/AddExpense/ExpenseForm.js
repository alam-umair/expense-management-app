import { useState } from "react";

import "./expenseForm.css";
const ExpenseForm = (props) => {
  // this approach is very repetitive and not recommended for large forms.
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  //   const [userInput, setUserInput] = useState({
  //     title: "",
  //     amount: "",
  //     date: new Date(),
  //   });

  const dateChangeHandler = (e) => {
    // this could give us older state value to avoid that use prevState with spread oprator
    // setUserInput({
    //   ...userInput,
    //   date: e.target.value,
    // });
    // anhother way to update state
    // setDate((prevState) => {
    //   return { ...prevState, date: e.target.value };
    // });
    setDate(e.target.value);
  };

  const titleChangeHanmdler = (e) => {
    setTitle(e.target.value);
    // setTitle((prevState) => {
    //   return { ...prevState, title: e.target.value };
    // });
  };

  const amountChangeHandler = (e) => {
    setAmount(e.target.value);
    // setAmount((prevState) => {
    //   return { ...prevState, amount: e.target.value };
    // });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    // this is where we can send the data to the server or parent component
    const expenseData = {
      title: title,
      amount: amount,
      date: new Date(date),
    };
    // const expenseData = { ...userInput };
    props.onSaveExpenseData(expenseData);
    // resetting the form
    setTitle("");
    setAmount("");
    setDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            name="date"
            min="2025-01-01"
            max="2029-12-31"
            value={date}
            onChange={dateChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={titleChangeHanmdler}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            id="amount"
            min="0.01"
            step="0.01"
            name="amount"
            value={amount}
            onChange={amountChangeHandler}
          />
        </div>
      </div>
      <div>
        <button className="new-expense__actions" type="submit">
          Add Expense
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
