import React from "react";
import IndivExpense from "./components/IndivExpense";
import "./App.css";

function App() {

  const data = {
    id: 1,
    title: "Keyb",
    amount: 2000.00,
    date: new Date()
  }


  return (
    <div>
      <h2>Let's get started!</h2>
      <div className="expense-container">
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
