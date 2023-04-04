let id = 3

const initialState = [{
  id: 1,
  title: 'Faire son Lit',
  completed: false
}, {
  id: 2,
  title: 'Se brosser les dents',
  completed: false
}]

export const ADD_TODO_ACTION = 'ADD_TODO_ACTION'

export function TodoReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO_ACTION:
      return [
        ...state,
        {
          id: ++id,
          completed: false,
          ...action.payload,
        },
      ];
    default:
      return state;
  }
}
