import { Doughnut } from 'react-chartjs-2';
import { useSelector } from 'react-redux';

const TasksChart = () => {
  const tasks = useSelector((state) => state.tasks);
  const completedTasks = (tasks.filter((val) => val.completed)).length;
  const incompleteTasks = (tasks.filter((val) => !val.completed)).length;

  const state = {
    labels: ['Completed Tasks', 'Pending Tasks'],
    datasets: [
      {
        label: 'Tasks',
        backgroundColor: ['#c50552', '#C9DE00'],
        borderColor: '#c50552',
        color: '#fff',
        borderWidth: 1,
        data: [completedTasks, incompleteTasks],
      },
    ],
  };

  return (
    <div className="chart">
      <Doughnut
        data={state}
      />
    </div>
  );
};

export default TasksChart;
