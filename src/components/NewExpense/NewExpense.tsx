import React, { useState } from "react";
import { ExpenseForm } from "./ExpenseForm";
import "./NewExpense.scss";

type ParentProps = {
  onAddExpense: any;
};

type ExpenseData = {
  title: string;
  amount: number;
  date: Date;
};

export const NewExpense = (props: ParentProps) => {
  const [isAdding, setIsAdding] = useState(false);

  const handleSaveExpenseData = (enteredExpenseData: ExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsAdding(false);
  };

  const handleShowAddExpense = () => {
    setIsAdding(true);
  };

  const handleCancelAdding = () => {
    setIsAdding(false);
  };

  return (
    <div className="new-expense">
      {!isAdding && (
        <button onClick={handleShowAddExpense}>Add New Expense!</button>
      )}
      {isAdding && (
        <ExpenseForm
          onSaveExpenseData={handleSaveExpenseData}
          onCancel={handleCancelAdding}
        />
      )}
    </div>
  );
};
