import { combineReducers } from 'redux';
import  users from './users';
import  friends from './friends';
import contacts from './contactReducer';

export default combineReducers({
  users,
  friends,
  contacts,
});


