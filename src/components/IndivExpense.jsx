import React from "react";
import "./IndivExpense.css";

function IndivExpense(props){
    const month = props.date.toLocaleString('en-US', {month: 'long'});
    const day = props.date.toLocaleString('en-US', {day: '2-digit'});
    const year = props.date.getFullYear();

    return (
        <div className="indiv-expense">
            <div>
                <h3> {month} </h3>
                <h3> {day} </h3>
                <h3> {year} </h3>
            </div>
            <h2> {props.title} </h2>
            <div className="indiv-expense-desc">
                <h6> Php {props.amount} </h6>
            </div>
        </div>
    )
}

export default IndivExpense;