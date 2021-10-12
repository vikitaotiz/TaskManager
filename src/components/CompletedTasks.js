import { useSelector } from 'react-redux';

const CompletedTasks = () => {
  const tasks = useSelector((state) => state.tasks);
  const completeTasks = tasks.filter((task) => task.completed);

  return (
    <div className="container mt-3">
      <ul className="list-group">
        {completeTasks.length > 0 ? completeTasks.map((task) => (
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
