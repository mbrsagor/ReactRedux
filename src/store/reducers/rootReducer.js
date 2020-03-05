import { combineReducers } from 'redux';
import counterReucer from './counterReducer';
import usernameReducer from './usernameReducer';

const rootReducer = combineReducers({
    counter: counterReucer,
    user: usernameReducer
});

export default rootReducer;
