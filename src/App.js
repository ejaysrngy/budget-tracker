import React from "react";
import IndivExpense from "./components/IndivExpense";
import "./App.css";
import NewExpense from "./components/NewExpense";

function App() {

  const data = {
    id: 1,
    title: "Keyb",
    amount: 2000.00,
    date: new Date()
  }


  return (
    <div>
      <div className="expense-container">
        <div className="new-expense-container">
          <NewExpense />
        </div>

        <IndivExpense 
          title={data.title}
          amount={data.amount}
          date={data.date}
        />
        <IndivExpense 
          title={data.title}
          amount={data.amount}
          date={data.date}
        />
        <IndivExpense 
          title={data.title}
          amount={data.amount}
          date={data.date}
        />
        <IndivExpense 
          title={data.title}
          amount={data.amount}
          date={data.date}
        />
      </div>
    </div>
  );
}

export default App;
