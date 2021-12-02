import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import ToDoList from "./ToDoList/reducer";

const reducers = combineReducers({ ToDoList });

export const store = createStore(
  reducers,
  { state: "new" },
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension && window.devToolsExtension()
  )
);
