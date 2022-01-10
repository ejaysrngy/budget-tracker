import React from "react";
import "./ExpenseYear.css";


function ExpenseYear(props) {
  function dropDownChangeHandler(event) {
    props.onChangeFilter(event.target.value);
  }

  return (
    <div className="year-filter">
      <div className="year-filter__dropdown">
        <label> Filter by year </label>
        <select value={props.selected} onChange={dropDownChangeHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
}

export default ExpenseYear;
