import { combineReducers } from 'redux';


const reducer = (state={name: ''}, action) => {
  return state
}

const postReducer = (state=[], action) => {
    return state
}

const userReducer = (state={isAuthenticated: true}, action) => {
    if (action.type === 'login') {
        return {
          isAuthenticated: true
        }
    }else if(action.type === 'logout'){
        return {
          isAuthenticated: false,
        }
    }
    return state
}

const rootReducer = combineReducers({
    base: reducer,
    post: postReducer,
    user: userReducer
})

export default rootReducer;
