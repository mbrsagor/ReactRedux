import { combineReducers } from 'redux';
import userReducer from '../features/users/user-reducer';

const reducer = (state={name: ''}, action) => {
  return state
}

const postReducer = (state=[], action) => {
    return state
}


const rootReducer = combineReducers({
    base: reducer,
    post: postReducer,
    user: userReducer
})

export default rootReducer;
