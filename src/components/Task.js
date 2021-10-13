import { NavLink } from 'react-router-dom';

const Task = ({ task }) => {
  const { title, completed } = task;
  return (
    <div className="container mt-3">
      <div className="mb-4 d-flex justify-content-between">
        <NavLink to="/" className="text-decoration-none text-white">
          <i className="fas fa-arrow-left" />
          {' '}
          Back
        </NavLink>
        <b className="text-decoration-none text-white">Single Task</b>
        <span>
          {' '}
        </span>
      </div>
      <div className="card rounded-0 p-3 mb-2">
        {title}
      </div>
      <small className="card rounded-0 p-1">
        <i>{completed ? 'Completed' : 'Incomplete'}</i>
      </small>
    </div>
  );
};

export default Task;
