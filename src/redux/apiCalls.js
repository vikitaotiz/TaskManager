export const fetchTasksFromApi = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos');
  const data = await res.json();
  return data.splice(0, 5);
};

export const addTaskToApi = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos');
  const data = await res.json();
  return data.splice(0, 5);
};
