export const fetchTasksFromApi = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos');
  const data = await res.json();
  return data.splice(0, 10);
};

export const addTaskToApi = async (task) => {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos', {
    method: 'POST',
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
    body: JSON.stringify(task),
  });
  const data = await res.json();
  console.log(data);
};
