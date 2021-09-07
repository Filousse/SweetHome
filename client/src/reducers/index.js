import { combineReducers } from 'redux';
import userReducer from './user.reducer';
import errorReducer from './error.reducer';
import usersReducer from './users.reducer';

export default combineReducers({
    userReducer,
    errorReducer,
    usersReducer,
});