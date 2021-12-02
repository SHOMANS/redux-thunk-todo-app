import {
  ADD_START,
  ADD_SUCCESS,
  ADD_FAIL,
  DELETE_START,
  DELETE_SUCCESS,
  DELETE_FAIL,
  SHOW_ALL_FAIL,
  SHOW_ALL_START,
  SHOW_ALL_SUCCESS,
} from "./types";
import * as api from "./api";

export const showTodos = () => async (dispatch) => {
  try {
    dispatch({ type: SHOW_ALL_START });

    console.log("fitching");
    const { data } = await api.showTodos();
    dispatch({ type: SHOW_ALL_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: SHOW_ALL_FAIL, payload: error.message });
  }
};

export const addTodoItem = (post) => async (dispatch) => {
  try {
    dispatch({ type: ADD_START });
    const { data } = await api.addTodoItem(post);

    dispatch({ type: ADD_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: ADD_FAIL, payload: error.message });
  }
};

export const deleteTodoItem = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_START });
    await await api.deleteTodoItem(id);

    dispatch({ type: DELETE_SUCCESS, payload: id });
  } catch (error) {
    dispatch({ type: DELETE_FAIL, payload: error.message });
  }
};
