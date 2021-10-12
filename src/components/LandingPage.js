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
    <div className="d-flex flex-column">
      <div className="header">
        <NavLink to="/tasks" className="text-decoration-none text-white">
          <div className="header">
            <i className="fas fa-tasks ml-2" />
            {' '}
            All Tasks
            {' '}
            {tasks.length}
            <hr />
            <TasksChart />
          </div>
        </NavLink>
      </div>
      <div className="row">
        <div className="col-lg-6 col-sm-12 sides">
          <NavLink to="/completedtasks" className="text-decoration-none text-white">
            <i className="fas fa-list-alt" />
            {' '}
            Completed Tasks
            {' '}
            {completedTasks}
          </NavLink>
        </div>
        <div className="col-lg-6 col-sm-12 sides">
          <NavLink to="/incompletetasks" className="text-decoration-none text-white">
            <i className="far fa-list-alt" />
            {' '}
            Incomplete Tasks
            {' '}
            {incompleteTasks}
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
