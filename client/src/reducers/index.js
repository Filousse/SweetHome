import { combineReducers } from 'redux';
import userReducer from './user.reducer';
import usersReducer from './users.reducer';
import guestReducer from './guest.reducer';
import errorReducer from './error.reducer';

export default combineReducers({
    userReducer,
    usersReducer,
    guestReducer,
    errorReducer,
});