import { TOGGLE_HIDE_ZERO, SET_SEARCH_TERM } from "./actionTypes";

/**
 * The dataGridReducer function is a reducer that handles the TOGGLE_HIDE_ZERO action by updating the
 * state to include the new hidden value.
 * @returns a new state object with the "hidden" property updated based on the value of the
 * "action.hidden" parameter.
 */
export function dataGridReducer(state: any, action: any) {
  switch (action.type) {
    case TOGGLE_HIDE_ZERO:
      return { ...state, hidden: action.hidden };
    case SET_SEARCH_TERM:
      return { ...state, value: action.value };
    default: {
      return state;
    }
  }
}
