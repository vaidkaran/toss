import { createStore, combineReducers } from 'redux';
import taskReducer from './reducers/taskList';

const rootReducer = combineReducers({
  taskReducer
})

const configureStore = () => createStore(rootReducer);

export default configureStore;