import "./ExpensesList.scss";
import { ExpenseItem } from "./ExpenseItem";

type ExpenseItemType = {
  id?: string;
  title: string;
  amount: number;
  date: Date;
};

type ListProps = {
  filtered: ExpenseItemType[];
};

export const ExpensesList = (props: ListProps) => {
  if (props.filtered.length === 0) {
    return <h2 className="expense-list__fallback">Found No Expenses.</h2>;
  }
  return (
    <ul className="expenses-list">
      {props.filtered.map((expense: ExpenseItemType) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          date={expense.date}
          amount={expense.amount}
        />
      ))}
    </ul>
  );
};
