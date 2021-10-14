import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../../redux/storeConfig';
import Task from '../../components/Task';

it('should render correctly', () => {
  const body = document.createElement('tbody');
  const task = { id: 1, title: 'Task One', userId: 1 };

  const tree = renderer
    .create(
      <Provider store={store}>
        <BrowserRouter>
          <Task task={task} />
        </BrowserRouter>
      </Provider>,
      body,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
