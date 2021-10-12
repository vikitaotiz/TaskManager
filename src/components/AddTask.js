import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addTask } from '../redux/tasks/tasks';

const AddTask = () => {
  const [title, setTitle] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const submitForm = () => {
    if (title) {
      const data = {
        userId: 1,
        id: uuidv4,
        title,
        completed: false,
      };
      dispatch(addTask(data));
      setTitle('');
    } else {
      setError('Title is required');
    }
  };
  return (
    <div>
      <button type="button" className="btn btn-primary btn-dm" data-bs-toggle="modal" data-bs-target="#exampleModal">
        <i className="fas fa-plus-circle" />
        {' '}
        Add New Task
      </button>

      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Add Task</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body">
              {error && <small>{error}</small>}
              <form className="p-2 m-2">
                <input
                  className="form-control"
                  type="text"
                  value={title}
                  placeholder="Task Title"
                  onChange={(e) => setTitle(e.target.value)}
                />
                <div className="d-grid">
                  {title && <button onClick={submitForm} type="button" className="btn btn-primary btn-sm mt-2" data-bs-dismiss="modal">Submit Task</button>}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default AddTask;
