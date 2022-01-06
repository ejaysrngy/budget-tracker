import React from "react";
import "./IndivExpense.css";
import Date from "./ExpenseDate";

function IndivExpense(props){
    return (
            <div className="indiv-expense">
                <Date date={props.date} />
                <h2> {props.title} </h2>
                <div className="indiv-expense-desc">
                    <h6> Php {props.amount} </h6>
                </div>
            </div>
    )
}

export default IndivExpense;