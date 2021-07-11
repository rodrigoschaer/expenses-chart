type ExpenseDateProps = { date: Date };

export const ExpenseDate = (props: ExpenseDateProps) => {
  const day = props.date.toLocaleString("pt-BR", { day: "2-digit" });
  const month = props.date.toLocaleString("pt-BR", { month: "long" });
  //const year = props.date?.toLocaleString("pt-BR", { year: "numeric" });
  const year = props.date.getFullYear();

  return (
    <div>
      <div>{day}</div>
      <div>{month}</div>
      <div>{year}</div>
    </div>
  );
};
