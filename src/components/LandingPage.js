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
    <div className="container-fluid landing">
      <NavLink to="/tasks">
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
      <div className="row">
        <div className="col sides">
          <NavLink to="/completedtasks">
            <i className="fas fa-list-alt" />
            {' '}
            Completed Tasks
            {' '}
            {completedTasks}
          </NavLink>
        </div>
        <div className="col sides">
          <NavLink to="/incompletetasks">
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
