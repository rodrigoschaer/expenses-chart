import { useState } from "react";

import "./Expense.scss";

import { Card } from "../UI/Card";
import { ExpensesList } from "./ExpensesList";
import { ExpenseFilter } from "./ExpenseFilter";
import { ExpensesChart } from "./ExpensesChart";

type ExpenseItemType = {
  id?: string;
  title: string;
  amount: number;
  date: Date;
};

type ExpenseProps = {
  expenses: ExpenseItemType[];
};

export const Expense = (props: ExpenseProps) => {
  const [filteredYear, setFilteredYear] = useState("2021");

  const handleExpenseFilter = (selectedYear: string) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.expenses.filter((expense: ExpenseItemType) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
  return (
    <>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onDropDownChange={handleExpenseFilter}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList filtered={filteredExpenses} />
      </Card>
    </>
  );
};
