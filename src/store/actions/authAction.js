import Axios from "axios";
import jwtDecode from "jwt-decode";
import * as Types from "./types";

export const register = (user, history) => (dispatch) => {
  Axios.post("http://127.0.0.1:8000/api/rest-auth/registration", user)
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

export const login = (user, history) => (dispatch) => {
  Axios.post("http://127.0.0.1:8000/api/auth/login/", user)
    .then((res) => {
      console.log(res);
      let token = res.data.token;
      localStorage.setItem("token", token);
      let decode = jwtDecode(token);
      dispatch({
        type: Types.SET_USER,
        payload: {
          user: decode,
        },
      });
      // history.push("/");
    })
    .catch((error) => {
      console.log(error.response.data);
      dispatch({
        type: Types.USERS_ERROR,
        payload: {
          error: error.response.data,
        },
      });
    });
};
