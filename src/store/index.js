import { createStore, combineReducers } from "redux";
import { TodoReducer } from "./todosreducer";
// const state = TodoReducer(undefined, {})
// const NewState = TodoReducer(state, { type: ADD_TODO_ACTION, payload: { title: 'Demo' } })
// console.log(state, NewState)
export default createStore(
  combineReducers({ todos: TodoReducer, filter: (state = 0, action) => state })
);
