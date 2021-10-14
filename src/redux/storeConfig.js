import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { taskReducers } from './tasks/tasks';

const rootReducer = combineReducers({ tasks: taskReducers });

const store = createStore(rootReducer, applyMiddleware(logger, thunk));

export default store;
