import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import LandingPage from './components/LandingPage';
import TaskList from './components/TaskList';

function App() {
  return (
    <Router>
      <Route path="/" exact component={LandingPage} />
      <Route path="/tasks" exact component={TaskList} />
    </Router>
  );
}

export default App;
