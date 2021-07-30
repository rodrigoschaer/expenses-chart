import React from "react";
import { ExpenseForm } from "./ExpenseForm";
import "./NewExpense.scss";

type ParentProps = {
  onAddExpense: any;
};

export const NewExpense = (props: ParentProps) => {
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
    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={handleSaveExpenseData} />
    </div>
  );
};
