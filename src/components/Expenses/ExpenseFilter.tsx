import "./ExpenseFilter.scss";
import { ChangeEvent } from "react";

type ParentProps = {
  onDropDownChange: any;
  selected: string;
};

export const ExpenseFilter = (props: ParentProps) => {
  const handleDropDownChange = (event: ChangeEvent<HTMLSelectElement>) => {
    props.onDropDownChange(event.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter By Year</label>
        <select value={props.selected} onChange={handleDropDownChange}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};
