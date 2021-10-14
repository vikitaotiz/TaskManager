import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../../redux/storeConfig';
import TaskList from '../../components/TaskList';

it('should render correctly', () => {
  const body = document.createElement('tbody');
  const data = [
    { id: 1, title: 'Task One', userId: 1 },
    { id: 2, title: 'Task Two', userId: 1 },
  ];

  const tree = renderer
    .create(
      <Provider store={store}>
        <BrowserRouter>
          <TaskList data={data} />
        </BrowserRouter>
      </Provider>,
      body,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
