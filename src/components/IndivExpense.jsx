import React from "react";
import "./IndivExpense.css";

function IndivExpense(props){
    return (
        <div className="indiv-expense">
            <h3> {props.date} </h3>
            <h2> {props.title} </h2>
            <div className="indiv-expense-desc">
                <h6> Php {props.amount} </h6>
            </div>
        </div>
    )
}

export default IndivExpense;