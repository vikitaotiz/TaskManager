import { NavLink } from 'react-router-dom';

const LandingPage = () => (
  <div className="container-fluid border">
    <NavLink to="/tasks">
      <div className="header">
        <i className="fas fa-tasks ml-2" />
        All Tasks
      </div>
    </NavLink>
    <div className="row">
      <div className="col border">
        <NavLink to="/">
          Completed
        </NavLink>
      </div>
      <div className="col border">
        <NavLink to="/">
          Completed
        </NavLink>
      </div>
    </div>
  </div>
);

export default LandingPage;
