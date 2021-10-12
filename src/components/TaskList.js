import { useSelector } from 'react-redux';
import AddTask from './AddTask';

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);

  return (
    <div className="container mt-3">
      <AddTask />
      <ul className="list-group">
        {tasks.length > 0 ? tasks.map((task) => (
          <li key={task.id} className="list-group-item mb-2 rounded-0 card">
            {task.title}
          </li>
        ))
          : 'No Data'}
      </ul>
      <hr />
    </div>
  );
};

export default TaskList;
