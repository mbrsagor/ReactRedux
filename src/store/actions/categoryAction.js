import * as Types from './types';
import axios from 'axios';


export const fetchCateogry = () => dispatch => {
    axios.get("http://127.0.0.1:8000/api/category/")
      .then((res) => {
        console.log(res.data);
        dispatch({
          type: Types.FETCH_CATEGORY,
          payload: {
            categories: res.data,
          },
        });
      })
      .catch((error) => {
        console.log(error);
      });
}
