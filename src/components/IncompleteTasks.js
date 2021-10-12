import { useSelector } from 'react-redux';

const CompletedTasks = () => {
  const tasks = useSelector((state) => state.tasks);
  const incompleteTasks = tasks.filter((task) => !task.completed);

  return (
    <div className="container mt-5">
      <ul className="list-group">
        {incompleteTasks.length > 0 ? incompleteTasks.map((task) => (
          <li key={task.id} className="list-group-item mb-2 rounded-0 card">
            {task.title}
          </li>
        ))
          : 'No Data'}
      </ul>
    </div>
  );
};

export default CompletedTasks;
