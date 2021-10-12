import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const CompletedTasks = () => {
  const tasks = useSelector((state) => state.tasks);
  const incompleteTasks = tasks.filter((task) => !task.completed);

  return (
    <div className="container mt-3">
      <div className="mb-4 d-flex justify-content-between">
        <NavLink to="/" className="text-decoration-none text-white">
          <i className="fas fa-arrow-left" />
          {' '}
          Back
        </NavLink>
        <b className="text-white">
          Incomplete Tasks
        </b>
        <span>{' '}</span>
      </div>
      <hr />
      <ul className="list-group">
        {incompleteTasks.length > 0 ? incompleteTasks.map((task) => (
          <li
            key={task.id}
            className="list-group-item rounded-0 mb-2 d-flex justify-content-between align-items-start"
          >
            <span>{task.title}</span>
            <span>Pending</span>
          </li>
        ))
          : 'No Data'}
      </ul>
    </div>
  );
};

export default CompletedTasks;
