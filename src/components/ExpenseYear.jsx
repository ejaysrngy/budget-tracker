import React from "react";
import "./ExpenseYear.css";

function ExpenseYear(props) {
  const [newFilteredYears, setNewFilteredYears] = React.useState([]);

  function dropDownChangeHandler(event) {
    props.onChangeFilter(event.target.value);
  }


  const yearDropdown = () => {
    if (props.declaredYears.length !== 0) {
      return (
        <select value={props.selected} onChange={dropDownChangeHandler}>
          <option value="Show All"> Show All </option>
          {props.declaredYears.map((item, index) => {
            if (
              item.date.getFullYear().toString() in props.declaredYears
            ) {
              console.log("this")
              return null;
            } else {
              return (
                <option key={index} value={item.date.getFullYear().toString()}>
                  {item.date.getFullYear().toString()}
                </option>
              );
            }
          })}
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
        {yearDropdown()}
      </div>
    </div>
  );
}

export default ExpenseYear;
