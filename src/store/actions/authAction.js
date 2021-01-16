import Axios from "axios";
import * as Types from "./types";

export const register = (user) => (dispatch) => {
  Axios.post("http://127.0.0.1:8000/api/rest-auth/registration", user)
    .then((res) => {
      console.log(res);
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
