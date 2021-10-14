import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const CompletedTasks = () => {
  const tasks = useSelector((state) => state.tasks);
  const completeTasks = tasks.filter((task) => task.completed);

  return (
    <div className="container mt-3">
      <div className="mb-4 d-flex justify-content-between">
        <NavLink to="/" className="text-decoration-none text-white">
          <i className="fas fa-arrow-left" />
          {' '}
          Back
        </NavLink>
        <b className="text-white">
          Completed Tasks
        </b>
        <span>{' '}</span>
      </div>
      <hr />
      <ul className="list-group">
        {completeTasks.length > 0 ? completeTasks.map((task) => (
          <li
            key={task.id}
            className="list-group-item rounded-0 mb-2 d-flex justify-content-between align-items-start completed"
          >
            <b>{task.title}</b>
            <span>{task.completed}</span>
            <span>Completed</span>
          </li>
        ))
          : 'No Data'}
      </ul>
    </div>
  );
};

export default CompletedTasks;
