export const fetchTasksFromApi = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos');
  const data = await res.json();
  return data.splice(0, 20);
};

export const addTaskToApi = async (task) => {
  fetch('https://jsonplaceholder.typicode.com/todos', {
    method: 'POST',
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
    body: JSON.stringify(task),
  }).then((res) => res.json())
    .then((data) => console.log('From react ', data));
};
