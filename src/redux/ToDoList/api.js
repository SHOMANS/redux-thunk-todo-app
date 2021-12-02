import axios from "axios";

const API = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
});

export const showTodos = () => API.get(`todos`);
export const addTodoItem = (newItem) => API.post("todos", newItem);
export const deleteTodoItem = (id) => API.delete(`todos/${id}`);
