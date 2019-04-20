import { combineReducers } from 'redux';
import simpleReducer from './simpleReducer';
import allReducer from './allReducer';
export default combineReducers({
  simpleReducer,
  allReducer
});
