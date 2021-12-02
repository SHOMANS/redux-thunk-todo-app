import React, { useState } from "react";
import { useDispatch } from "react-redux";
import * as Actions from "../redux/ToDoList/actions";

const initialValues = { userId: "", title: "" };
export default function Form() {
  const [form, setForm] = useState(initialValues);
  const dispatch = useDispatch();

  const handleChange = ({ target }) => {
    setForm({ ...form, [target.name]: target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form !== initialValues) dispatch(Actions.addTodoItem(form));
    setForm(initialValues);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="User Id"
          name="userId"
          onChange={handleChange}
          value={form.userId}
          required
        />
        <input
          type="text"
          placeholder="Title"
          name="title"
          onChange={handleChange}
          value={form.title}
          required
        />
        <button type="submit">Add New</button>
      </form>
    </div>
  );
}
