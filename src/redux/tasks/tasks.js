import { addTaskToApi } from '../apiCalls';

// Action Identifiers
const FETCH_TASKS = 'FETCH_TASKS';
const ADD_TASK = 'ADD_TASK';
const COMPLETED_TASKS = 'COMPLETED_TASKS';
const INCOMPLETE_TASKS = 'INCOMPLETE_TASKS';
// Action Creators
export const fetchTasks = (tasks) => ({
  type: FETCH_TASKS,
  payload: tasks,
});

export const completedTasks = () => ({ type: COMPLETED_TASKS });
export const incompleteTasks = () => ({ type: INCOMPLETE_TASKS });

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
      addTaskToApi(action.payload);
      return [action.payload, ...state];
    case COMPLETED_TASKS:
      return state.filter((val) => val.completed);
    case INCOMPLETE_TASKS:
      return state.filter((val) => !val.completed);
    default:
      return state;
  }
};
