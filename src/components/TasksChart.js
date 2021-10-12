import { Doughnut } from 'react-chartjs-2';
import { useSelector } from 'react-redux';

const TasksChart = () => {
  const tasks = useSelector((state) => state.tasks);
  const completedTasks = (tasks.filter((val) => val.completed)).length;
  const incompleteTasks = (tasks.filter((val) => !val.completed)).length;

  const state = {
    labels: ['Completed Tasks', 'Incomplete Task'],
    datasets: [
      {
        label: 'Tasks',
        backgroundColor: ['#B21F00', '#C9DE00'],
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 1,
        data: [completedTasks, incompleteTasks],
      },
    ],
  };

  return (
    <div className="chart">
      <Doughnut
        data={state}
        options={{
          title: {
            display: true,
            text: 'All Tasks',
            fontSize: 20,
          },
          legend: {
            display: true,
            position: 'right',
          },
        }}
      />
    </div>
  );
};

export default TasksChart;
