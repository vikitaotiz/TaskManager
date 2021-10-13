import { BrowserRouter as Router, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import LandingPage from './components/LandingPage';
import TaskList from './components/TaskList';
import CompletedTasks from './components/CompletedTasks';
import IncompleteTasks from './components/IncompleteTasks';
import Task from './components/Task';

function App() {
  const tasks = useSelector((state) => state.tasks);

  return (
    <Router>
      <Route path="/" exact component={LandingPage} />
      <Route path="/tasks" exact component={TaskList} />
      <Route path="/completedtasks" exact component={CompletedTasks} />
      <Route path="/incompletetasks" exact component={IncompleteTasks} />
      {tasks.map((task) => (
        <Route
          key={task.id}
          path={`/${task.id}`}
        >
          <Task task={task} />
        </Route>
      ))}
    </Router>
  );
}

export default App;
