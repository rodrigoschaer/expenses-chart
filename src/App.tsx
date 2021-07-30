import { Expense } from "./components/Expenses/Expense";
import { NewExpense } from "./components/NewExpense/NewExpense";

export default function App() {
  const expensesOptions = [
    {
      id: "expense1",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "expense2",
      title: "Amazon Books",
      amount: 60.0,
      date: new Date(2021, 2, 5),
    },
    {
      id: "expense3",
      title: "Agiota",
      amount: 1000.67,
      date: new Date(2021, 2, 13),
    },
    {
      id: "expense4",
      title: "Valorant",
      amount: 100.0,
      date: new Date(2021, 2, 22),
    },
  ];

  type ExpenseData = {
    title: string;
    amount: number;
    date: Date;
  };

  const handleAddExpense = (enteredExpense: ExpenseData) => {
    const expenseData = {
      ...enteredExpense,
      id: Math.random().toString(),
    };
    console.log(expenseData);
  };

  return (
    <div>
      <NewExpense onAddExpense={handleAddExpense} />
      <Expense expenses={expensesOptions} />
    </div>
  );
}
