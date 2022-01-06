import React from "react";
import IndivExpense from "./components/IndivExpense";
import "./App.css";
import NewExpense from "./components/NewExpense";

function App() {
  const [expenseList, setExpenseList] = React.useState([]);
  const data = [
    {
      id: 1,
      title: "Keyb",
      amount: 2000.0,
      date: new Date(),
    },
    { id: 1, title: "Keyb", amount: 2000.0, date: new Date() },
    { id: 1, title: "Keyb", amount: 2000.0, date: new Date() },
  ];

  function saveNewExpenseHandler(data) {
    setExpenseList([{
      ...data,
      id: Math.random().toString(),
    },...expenseList]);
  }

  return (
    <div>
      <div className="expense-container">
        <div className="new-expense-container">
          <NewExpense onSaveNewExpense={saveNewExpenseHandler} />
        </div>
        <div>
          {expenseList.map((item, index) => (
            <IndivExpense
              key={index}
              id={index}
              title={item.title}
              amount={item.amount}
              date={item.date}
            />
          ))}
        </div>
        {/* Map out IndivExpense */}

        {/* <IndivExpense 
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
        /> */}
      </div>
    </div>
  );
}

export default App;
