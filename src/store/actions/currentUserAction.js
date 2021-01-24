import Axios from "axios";
import * as Types from "./types";

// Get current user information
export const getCurrentUser = () => (dispatch) => {
  Axios.get("http://127.0.0.1:8000/api/user")
    .then((res) => {
      console.log(res);
      dispatch({
        type: Types.CURRENT_USER,
        payload: {
          user: res.data,
        },
      });
    })
    .catch((error) => {
      console.log(error);
      dispatch({
        type: Types.USERS_ERROR,
        payload: {
          error: error.response.data,
        },
      });
    });
};
