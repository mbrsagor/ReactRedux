import * as Types from "../actions/types";
import Axios from "axios";

// Load posts
export const fetchPost = () => (dispatch) => {
  Axios.get("http://127.0.0.1:8000/api/post/")
    .then((res) => {
      console.log(res.data);
      dispatch({
        type: Types.FETCH_POST,
        payload: {
          posts: res.data,
        },
      });
    })
    .catch((error) => {
      console.log(error);
    });
};
