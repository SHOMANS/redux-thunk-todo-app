import { ADD, DELETE, SHOW_ALL } from "./types";

export default function reducer(state = { todos: [] }, action) {
  switch (action.type) {
    case SHOW_ALL:
      return {
        ...state,
        todos: action.payload,
      };
    case ADD:
      return { ...state, todos: [action.payload, ...state.todos] };
    case DELETE:
      return {
        ...state,
        todos: state.todos.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
}
