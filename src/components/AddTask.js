import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addTask } from '../redux/tasks/tasks';

const AddTask = () => {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();
  const submitForm = () => {
    const data = {
      userId: 1,
      id: uuidv4,
      title,
      completed: false,
    };
    dispatch(addTask(data));
  };
  return (
    <form className="card p-2 m-2">
      <input
        className="form-control"
        type="text"
        value={title}
        placeholder="Task Title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={submitForm} type="button" className="btn btn-primary">Submit Task</button>
    </form>
  );
};

export default AddTask;
