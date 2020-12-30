import Axios from 'axios';

import config from '../../config';

export const LOGIN = 'LOGIN'
export const SIGNUP = "SIGNUP"
export const LOGOUT = "LOGOUT"
export const LOADING = "LOADING"
export const ERROR = "ERROR"


// Actions creators
export const loading = isLoading => dispatch => {
    dispatch({type: LOADING, payload: isLoading})
}

export const catchError = error => dispatch => {
    dispatch({type: ERROR, payload: error})
}

export const login = user => dispatch => {
    loading(true)
    Axios.post(`${config.baseUrl}/api/auth/login/`, user)
        .then(({data}) => {
            loading(false);
            catchError('')
            
            console.log(data);
            localStorage.setItem('token', data.token)
            dispatch({type: LOGIN, payload: data.user})
        })
        .catch(error => {
            loading(false)
            const errorMessage = error.response.data.mes
            console.log(errorMessage);
            catchError(errorMessage);
            console.log(error);
        })
}

export const singup = user => dispatch => {
    
}

export const logout = () => dispatch => {

}


export const init = {
    users: {},
    isAuthenticated: false,
    isLoading: false,
    error: ''
}


// User  Reducer
const userReducer = (state = init, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                user: action.payload,
                isAuthenticated: true
            }
        case LOGOUT:
            return {
              ...state,
              user: {},
              isAuthenticated: false,
            };
        case LOADING:
            return {
                ...state,
                isLoading: action.payload
            }
        case ERROR:
            return {
                ...state,
                error: action.payload
            }
        default: return state
    }
}

export default userReducer;
