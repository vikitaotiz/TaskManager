import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import AddTask from './AddTask';

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);

  return (
    <div className="container mt-3">
      <div className="mb-4 d-flex justify-content-between">
        <NavLink to="/" className="text-decoration-none text-white">
          <i className="fas fa-arrow-left" />
          {' '}
          Back
        </NavLink>
        <b className="text-white">
          All Tasks
        </b>
        <span>
          <AddTask />
        </span>
      </div>
      <hr />
      <ul className="list-group">
        {tasks.length > 0 ? tasks.map((task) => (
          <li
            key={task.id}
            className={task.completed ? 'list-group-item rounded-0 mb-2 d-flex justify-content-between align-items-start completed'
              : 'list-group-item rounded-0 mb-2 d-flex justify-content-between align-items-start'}
          >
            <div className="ms-2 me-auto">
              <input type="checkbox" name="" id="" />
              {' '}
              <b>{task.title}</b>
            </div>
            <span>{task.completed ? 'Completed' : 'Pending'}</span>
          </li>
        ))
          : 'No Data'}
      </ul>
    </div>
  );
};

export default TaskList;
