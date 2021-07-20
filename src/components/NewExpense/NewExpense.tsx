import React from "react";
import { ExpenseForm } from "./ExpenseForm";
import "./NewExpense.scss";

export const NewExpense = () => {
  type ExpenseData = {
    title: string;
    amount: number;
    date: Date;
  };

  const handleSaveExpenseData = (enteredExpenseData: ExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    console.log(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={handleSaveExpenseData} />
    </div>
  );
};
