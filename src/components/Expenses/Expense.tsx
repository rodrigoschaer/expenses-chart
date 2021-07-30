import { Card } from "../UI/Card";
import { ExpenseItem } from "./ExpenseItem";
import "./Expense.scss";
import { ExpenseFilter } from "./ExpenseFilter";
import { useState } from "react";

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
  const [filteredYear, setFilteredYear] = useState("2020");

  const handleExpenseFilter = (selectedYear: string) => {
    setFilteredYear(selectedYear);
  };

  return (
    <>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onDropDownChange={handleExpenseFilter}
        />

        {props.expenses.map((expense: ExpenseItemType) => (
          <ExpenseItem
            title={expense.title}
            date={expense.date}
            amount={expense.amount}
          />
        ))}
      </Card>
    </>
  );
};
