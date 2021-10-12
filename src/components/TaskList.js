import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import fetchTasksFromApi from '../redux/apiCalls';
import { fetchTasks } from '../redux/tasks/tasks';

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  useEffect(async () => {
    const data = await fetchTasksFromApi();
    dispatch(fetchTasks(data));
  }, []);

  return (
    <div className="container mt-3">
      <ul className="list-group">
        {tasks.length > 0 ? tasks.map((task) => (
          <li key={task.id} className="list-group-item mb-2 rounded">
            {task.title}
          </li>
        ))
          : 'No Data'}
      </ul>
    </div>
  );
};

export default TaskList;
