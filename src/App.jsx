import React from "react";
import IndivExpense from "./components/IndivExpense";
import "./App.css";
import NewExpense from "./components/NewExpense";
import ExpenseYear from "./components/ExpenseYear";

function App() {
  const [expenseList, setExpenseList] = React.useState([]);
  const [filteredYear, setFilteredYear] = React.useState("2020");

  function onChangeYearHandler(year) {
    setFilteredYear(year);
  }

  function saveNewExpenseHandler(data) {
    setExpenseList((prevExpenses) => {
      return [data, ...prevExpenses];
    });
  }

  const filteredExpense = expenseList.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });


  return (
    <div>
      <div className="expense-container__new">
        <div className="new-expense-container">
          <NewExpense onSaveNewExpense={saveNewExpenseHandler} />
        </div>
      </div>
      <div className="expense-container__body">
        <div className="expense-year__filter">
          <ExpenseYear
            declaredYears={expenseList}
            onChangeFilter={onChangeYearHandler}
            value={filteredYear}
          />
        </div>
        <div>
          {expenseList.length === 0 ? (
            <h1 className="empty-placeholder"> No expenses </h1>
          ) : filteredYear !== "Show All" ? (
            filteredExpense.map((item, index) => (
              <IndivExpense
                key={index}
                id={index}
                title={item.title}
                amount={item.amount}
                date={item.date}
              />
            ))
          ) : (
            expenseList.map((item, index) => (
              <IndivExpense
                key={index}
                id={index}
                title={item.title}
                amount={item.amount}
                date={item.date}
              />
            ))
          )}
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
