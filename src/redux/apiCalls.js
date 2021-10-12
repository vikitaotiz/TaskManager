const fetchTasksFromApi = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos');
  const data = await res.json();
  return data.splice(0, 10);
};

export default fetchTasksFromApi;
