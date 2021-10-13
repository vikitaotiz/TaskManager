import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchTasksFromApi } from '../redux/apiCalls';
import { fetchTasks } from '../redux/tasks/tasks';
import TasksChart from './TasksChart';

const LandingPage = () => {
  const dispatch = useDispatch();

  const tasks = useSelector((state) => state.tasks);
  const completedTasks = (tasks.filter((val) => val.completed)).length;
  const incompleteTasks = (tasks.filter((val) => !val.completed)).length;

  useEffect(async () => {
    const data = await fetchTasksFromApi();
    dispatch(fetchTasks(data));
  }, []);

  return (
    <div className="wrapper">
      <div className="header mt-2">
        <NavLink to="/tasks" className="text-decoration-none text-white">
          <i className="fas fa-chart-pie" />
          {' '}
          Task Manager
          {' '}
          {tasks.length}
          <hr />
          <TasksChart />
        </NavLink>
      </div>
      <div className="row text-center mt-2">
        <div className="col">
          Test
        </div>
        <div className="col">Recent Tasks</div>
        <div className="col">Test</div>
      </div>
      <div className="row m-0 p-0">
        {tasks.map((task) => (
          <NavLink
            to={`/${task.id}`}
            key={task.id}
            className={task.completed ? 'col-6 col-lg-4 task complete-task text-decoration-none'
              : 'col-6 col-lg-4 task text-decoration-none'}
          >
            <div>
              <small className="text-decoration-none status">{task.completed ? 'Completed' : 'Pending'}</small>
              <br />
              <small>{task.title}</small>
            </div>
          </NavLink>
        ))}
      </div>
      <div className="row m-0 p-0">
        <div className="col-6 sides">
          <NavLink to="/completedtasks" className="text-decoration-none text-white">
            <i className="fas fa-list-alt" />
            {' '}
            Completed Tasks
            {' '}
            {completedTasks}
          </NavLink>
        </div>
        <div className="col-6 sides">
          <NavLink to="/incompletetasks" className="text-decoration-none text-white">
            <i className="far fa-list-alt" />
            {' '}
            Pending Tasks
            {' '}
            {incompleteTasks}
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
