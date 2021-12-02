import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import * as Actions from "./redux/ToDoList/actions";
import { useEffect } from "react";
import ToDoItem from "./components/ToDoItem";
import Form from "./components/Form";
import Error from "./components/Error";
import Loading from "./components/Loading";

function App() {
  const { ToDoList } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => dispatch(Actions.showTodos()), []);

  return (
    <div className="App">
      <Form />
      {ToDoList.error && <Error error={ToDoList.error} />}
      {ToDoList.isLoading && <Loading />}
      {ToDoList.todos.map((eliment) => (
        <ToDoItem eliment={eliment} />
      ))}
    </div>
  );
}

export default App;
