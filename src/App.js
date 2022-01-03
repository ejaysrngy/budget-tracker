import React from "react";
import IndivExpense from "./components/IndivExpense";


function App() {
  const data = {
    id: 1,
    title: "Keyb",
    amount: 2000.00,
    date: Date.now()
  }

  console.log(data.title)
  return (
    <div>
      <h2>Let's get started!</h2>
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
  );
}

export default App;
