import React from "react";
import { useDispatch } from "react-redux";
import * as Actions from "../redux/ToDoList/actions";

export default function ToDoItem({ eliment }) {
  const dispatch = useDispatch();

  const handleDeleteItem = () => {
    dispatch(Actions.deleteTodoItem(eliment.id));
  };

  return (
    <div className="todoListItem" key={eliment.id}>
      <p>
        {eliment.userId} → {eliment.title} &nbsp;
        <button onClick={handleDeleteItem}>delete</button>
      </p>
    </div>
  );
}
