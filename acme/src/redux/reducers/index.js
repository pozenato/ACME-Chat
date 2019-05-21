import message from './message';
import users from './users';
import { combineReducers } from 'redux';

export default combineReducers({
    message,
    users,
})