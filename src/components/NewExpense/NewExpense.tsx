import React from "react";
import "./NewExpense.scss";

export const NewExpense = () => {
  return (
    <div className="new-expense">
      <form action="">
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input type="text" />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input type="number" />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input type="text" min="0.01" />
          </div>
        </div>
      </form>
    </div>
  );
};
