import React from "react";
import "./ExpenseDate.css";


function ExpenseDate(props){
    const month = props.date.toLocaleString('en-US', {month: 'long'});
    const day = props.date.toLocaleString('en-US', {day: '2-digit'});
    const year = props.date.getFullYear();

    return (
        <div className="expense-date">
            <div id="month"> {month} </div>
            <div id="day"> {day} </div>
            <div id="year"> {year} </div>
        </div>
    )
}

export default ExpenseDate;