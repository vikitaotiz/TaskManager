import { fetchTasksFromApi } from '../redux/apiCalls';
import { fetchTasks, taskReducers } from '../redux/tasks/tasks';

const mockData = [
  { id: 1, title: 'Task One', userId: 1 },
  { id: 2, title: 'Task Two', userId: 1 },
];

const action = {
  type: 'FETCH_TASKS',
  payload: mockData,
};

describe('Should test task reducer', () => {
  it('Should return an array on api call', async () => {
    const data = await fetchTasksFromApi();
    expect(data.length).toBeGreaterThan(0);
  });

  it('Should return an object', () => {
    expect(fetchTasks(mockData)).toBeInstanceOf(Object);
  });

  it('Should return an array when fetch tasks in task reducer is called', () => {
    expect(taskReducers([], action)).toBeInstanceOf(Array);
  });
});
