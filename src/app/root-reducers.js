import { combineReducers } from 'redux';


const reducer = (state={name: ''}, actions) => {
  return state
}

const postReducer = (state=[], actions) => {
    return state
}

const userReducer = (state={isAuthenticated: true}, actions) => {
    return state
}

const rootReducer = combineReducers({
    base: reducer,
    post: postReducer,
    user: userReducer
})

export default rootReducer;
