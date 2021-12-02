import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import * as Actions from "./redux/ToDoList/actions";
import { useEffect } from "react";
import ToDoItem from "./components/ToDoItem";
import Form from "./components/Form";

function App() {
  const data = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => dispatch(Actions.showTodos()), []);

  return (
    <div className="App">
      <Form />
      {data.ToDoList.todos.map((eliment) => (
        <ToDoItem eliment={eliment} />
      ))}
    </div>
  );
}

export default App;
