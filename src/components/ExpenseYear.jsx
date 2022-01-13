import React from "react";
import "./ExpenseYear.css";

function ExpenseYear(props) {
  function dropDownChangeHandler(event) {
    props.onChangeFilter(event.target.value);
    console.log(event.target.value)
  }

  // let x = props.declaredYears[0].date
  // console.log(x.getFullYear().toString())

  const yearDropdown = () => {
    if (props.declaredYears.length !== 0) {
      return (
        <select value={props.selected} onChange={dropDownChangeHandler}>
          <option value="Show All"> Show All </option>
          {props.declaredYears.map((item, index) => {
            return (
              <option key={index} value={item.date.getFullYear().toString()}>
                {item.date.getFullYear().toString()}
              </option>
            );
          })}
          {/* <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option> */}
        </select>
      );
    } else {
      return null;
    }
  };

  return (
    <div className="year-filter">
      <div className="year-filter__dropdown">
        <label> Filter by year </label>
        {/* {props.declaredYears.length !== 0 ? <select value={props.selected} onChange={dropDownChangeHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select> : null} */}
        {yearDropdown()}
      </div>
    </div>
  );
}

export default ExpenseYear;
