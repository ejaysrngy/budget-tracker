import React from "react";
import "./IndivExpense.css";
import Date from "./ExpenseDate";


function IndivExpense(props){
    function onClickHandler(){
        console.log("this")
    }

    return (
        <div className="indiv-expense">
            <Date date={props.date} />
            <h2> {props.title} </h2>
            <div className="indiv-expense-desc">
                <h6> Php {props.amount} </h6>
            </div>
            <button onClick={onClickHandler}> Lorem Ipsum </button>
        </div>
    )
}

export default IndivExpense;