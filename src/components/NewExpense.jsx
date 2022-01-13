import React, { useState } from "react";
import "./NewExpense.css";

function NewExpense(props) {
  // const [newTitle, setNewTitle] = useState("")
  // const [newAmount, setNewAmount] = useState("")
  // const [newDate, setNewDate] = useState("")
  const [isEditing, setIsEditing] = React.useState(false);

  const [userInput, setUserInput] = useState({
    newTitle: "",
    newAmount: "",
    newDate: "",
  });

  function isEditingHandler() {
    setIsEditing(true);
  }

  function cancelEditingHandler(){
    setIsEditing(false);
  }

  function titleChangeHandler(event) {
    setUserInput((prevState) => {
      return { ...prevState, newTitle: event.target.value };
    });
  }

  function amountChangeHandler(event) {
    setUserInput((prevState) => {
      return { ...prevState, newAmount: event.target.value };
    });
  }

  function dateChangeHandler(event) {
    setUserInput((prevState) => {
      return { ...prevState, newDate: event.target.value };
    });
  }

  function submitHandler(event) {
    event.preventDefault();

    const expenseData = {
      title: userInput.newTitle,
      amount: userInput.newAmount,
      date: new Date(userInput.newDate),
    };

    props.onSaveNewExpense(expenseData);

    setUserInput({
      newTitle: "",
      newAmount: "",
      newDate: "",
    });
  }

  return (
    <div className="new-expense">
      {isEditing && (
        <form onSubmit={submitHandler}>
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
                min="2019-01-01"
                max="2022-31-12"
              />
            </div>
          </div>
          <div className="new-expense-actions">
            <button onClick={cancelEditingHandler}> Cancel </button>
            <button type="submit"> Add Expense </button>
          </div>
        </form>
      )}
      {!isEditing && <button onClick={isEditingHandler}> Add Expense </button>}
    </div>
  );
}

export default NewExpense;
