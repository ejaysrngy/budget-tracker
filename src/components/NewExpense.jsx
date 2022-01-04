import React, { useState } from "react";
import "./NewExpense.css";

function NewExpense() {
  // const [newTitle, setNewTitle] = useState("")
  // const [newAmount, setNewAmount] = useState("")
  // const [newDate, setNewDate] = useState("")

  const [userInput, setUserInput] = useState({
    newTitle: "",
    newAmount: "",
    newDate: "",
  });

  function titleChangeHandler(event) {
    setUserInput({
        ...userInput,
        newTitle: event.target.value
    });
  }

  function amountChangeHandler(event) {
    setUserInput(event.target.value);
  }

  function dateChangeHandler(event) {
    setUserInput(event.target.value);
  }

  return (
    <div className="new-expense">
      <form>
        <div className="new-expense-controls">
          <div className="new-expense-control">
            <label> Title </label>
            <input
              onChange={(event) => titleChangeHandler(event)}
              value={userInput.newTitle}
              type="text"
            />
          </div>
          <div className="new-expense-control">
            <label> Amount </label>
            <input
              onChange={(event) => amountChangeHandler(event)}
              value={userInput.newAmount}
              type="number"
              min="0.01"
              step="0.01"
            />
          </div>
          <div className="new-expense-control">
            <label> Date </label>
            <input
              onChange={(event) => dateChangeHandler(event)}
              value={userInput.newDate}
              type="date"
              min="2022-04-01"
              max="2022-31-12"
            />
          </div>
        </div>
        <div className="new-expense-actions">
          <button type="submit"> Add Expense </button>
        </div>
      </form>
    </div>
  );
}

export default NewExpense;