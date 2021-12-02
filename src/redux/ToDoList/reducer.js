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

export default function reducer(
  state = { isLoading: false, error: "", todos: [] },
  action
) {
  switch (action.type) {
    case SHOW_ALL_START:
      return {
        ...state,
        isLoading: true,
      };

    case SHOW_ALL_SUCCESS:
      return { ...state, isLoading: false, todos: action.payload };
    case SHOW_ALL_FAIL:
      return { ...state, isLoading: false, error: action.payload };

    case ADD_START:
      return {
        ...state,
        isLoading: true,
      };

    case ADD_SUCCESS:
      return {
        ...state,
        isLoading: false,
        todos: [action.payload, ...state.todos],
      };
    case ADD_FAIL:
      return { ...state, isLoading: false, error: action.payload };

    case DELETE_START:
      return {
        ...state,
        isLoading: true,
      };

    case DELETE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        todos: state.todos.filter((item) => item.id !== action.payload),
      };
    case DELETE_FAIL:
      return { ...state, isLoading: false, error: action.payload };

    default:
      return state;
  }
}
