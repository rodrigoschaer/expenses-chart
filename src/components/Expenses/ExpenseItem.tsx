import { Card } from "../UI/Card";
import { ExpenseDate } from "./ExpenseDate";
import "./ExpenseItem.scss";

type ExpenseItemProps = {
  date: Date;
  title: string;
  amount: number;
};

// export default function ExpenseItem(props: ExpenseItemProps) {
//   return (
//     <div className="expense-item">
//       <div>{props.date?.toLocaleString()}</div>
//       <div className="expense-item__description">
//         <h2>{props.title}</h2>
//         <div className="expense-item__price">$ {props.amount}</div>
//       </div>
//     </div>
//   );
// }

// export default const ExpenseItem: React.FC<ExpenseItemProps> = (props) => {
//   return (
//     <ul>
//       {props.title}
//       {props.date?.toLocaleString()}
//     </ul>
//   );
// };

export const ExpenseItem = (props: ExpenseItemProps) => {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">$ {props.amount}</div>
      </div>
    </Card>
  );
};
