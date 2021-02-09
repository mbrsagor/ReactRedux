import Axios from "axios";
import jwtDecode from "jwt-decode";
import * as Types from "./types";
import {BASE_URL} from '../../config/APIURL';

// User register action
export const register = (user, history) => (dispatch) => {
  Axios.post(`${BASE_URL}/rest-auth/registration`, user)
    .then((res) => {
      dispatch({
        type: Types.USERS_ERROR,
        payload: {
          error: {},
        },
      });
      console.log(res);
      history.push("/login");
    })
    .catch((error) => {
      dispatch({
        type: Types.USERS_ERROR,
        payload: {
          error: error.response.data,
        },
      });
    });
};

// User login action
export const login = (user, history) => (dispatch) => {
  Axios.post(`${BASE_URL}/login/`, user)
    .then((res) => {
      // console.log(res);
      let token = res.data.access;
      localStorage.setItem("token", token);
      let decode = jwtDecode(token);
      dispatch({
        type: Types.SET_USER,
        payload: {
          user: decode,
        },
      });
      history.push("/");
    })
    .catch((error) => {
      console.log(error);
      dispatch({
        type: Types.USERS_ERROR,
        payload: {
          error: error,
        },
      });
    });
};

// User logout action
export const logout = (history) => {
  localStorage.removeItem("token");
  history.push("/login");
  return {
    type: Types.SET_USER,
    payload: {
      user: {},
    },
  };
};
