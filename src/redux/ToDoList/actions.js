import { ADD, DELETE, SHOW_ALL } from "./types";
import * as api from "./api";

export const showTodos = () => async (dispatch) => {
  try {
    console.log("fitching");
    const { data } = await api.showTodos();
    dispatch({ type: SHOW_ALL, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const addTodoItem = (post) => async (dispatch) => {
  try {
    const { data } = await api.addTodoItem(post);

    dispatch({ type: ADD, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deleteTodoItem = (id) => async (dispatch) => {
  try {
    await await api.deleteTodoItem(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error);
  }
};
