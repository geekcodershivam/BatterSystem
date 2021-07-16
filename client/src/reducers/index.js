import { combineReducers } from 'redux';
import authReducer from './authReducer';
import alertReducer from './alertReducer';
import graphReducer from './graphReducer';
export default combineReducers({
  auth: authReducer,
  alert:alertReducer,
  graph:graphReducer,
});
