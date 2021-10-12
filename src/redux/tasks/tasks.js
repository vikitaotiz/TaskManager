// Action Identifiers
const FETCH_TASKS = 'FETCH_TASKS';

// Action Creators
export const fetchTasks = (tasks) => ({
  type: FETCH_TASKS,
  payload: tasks,
});

// Reducers
const initialState = {
  tasks: [],
};

export const taskReducers = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TASKS:
      return action.payload;
    default:
      return state;
  }
};
