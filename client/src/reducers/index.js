import { combineReducers } from 'redux';
import turnReducer from './turnReducer';

export default combineReducers({
  turns: turnReducer
});
