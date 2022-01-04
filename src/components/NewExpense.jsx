import React from "react";
import "./NewExpense.css";

function NewExpense() {
    return (
        <div className="new-expense">
            <form>
                <div className="new-expense-controls"> 
                    <div className="new-expense-control">
                        <label> Title </label>
                        <input type='text' />
                    </div>
                    <div className="new-expense-control">
                        <label> Amount </label>
                        <input type='number' min="0.01" step="0.01" />
                    </div>
                    <div className="new-expense-control">
                        <label> Date </label>
                        <input type='date' min="2022-04-01" max="2022-31-12" />
                    </div>
                </div>
                <div className="new-expense-actions"> 
                    <button type="submit"> Add Expense </button>
                </div>
            </form>
        </div>
    )
}


export default NewExpense;