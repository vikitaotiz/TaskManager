import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import LandingPage from './components/LandingPage';
import TaskList from './components/TaskList';
import CompletedTasks from './components/CompletedTasks';
import IncompleteTasks from './components/IncompleteTasks';

function App() {
  return (
    <Router>
      <Route path="/" exact component={LandingPage} />
      <Route path="/tasks" exact component={TaskList} />
      <Route path="/completedtasks" exact component={CompletedTasks} />
      <Route path="/incompletetasks" exact component={IncompleteTasks} />
    </Router>
  );
}

export default App;
