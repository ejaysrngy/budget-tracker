import React from "react";

function ExpenseDate(props){
    const month = props.date.toLocaleString('en-US', {month: 'long'});
    const day = props.date.toLocaleString('en-US', {day: '2-digit'});
    const year = props.date.getFullYear();

    return (
        <div>
            <h3> {month} </h3>
            <h3> {day} </h3>
            <h3> {year} </h3>
        </div>
    )
}

export default ExpenseDate;