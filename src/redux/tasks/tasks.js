// Action Identifiers
const FETCH_TASKS = 'FETCH_TASKS';
const ADD_TASK = 'ADD_TASK';

// Action Creators
export const fetchTasks = (tasks) => ({
  type: FETCH_TASKS,
  payload: tasks,
});

export const addTask = (task) => ({
  type: ADD_TASK,
  payload: task,
});

// Reducers
const initialState = [];

export const taskReducers = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TASKS:
      return action.payload;
    case ADD_TASK:
      return [action.payload, ...state];
    default:
      return state;
  }
};
