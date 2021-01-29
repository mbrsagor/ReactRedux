import * as Types from "./types";
import axios from "axios";

// Fetch list of categories
export const fetchCateogry = () => (dispatch) => {
  axios
    .get("http://127.0.0.1:8000/api/category/")
    .then((res) => {
      // console.log(res.data);
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
};

// Create new category
export const createCategory = (category) => (dispatch) => {
  axios
    .post("http://127.0.0.1:8000/api/category/", category)
    .then((res) => {
      // console.log(res.data);
      let message = "Category crated successfully";
      dispatch({
        type: Types.CREATE_CATEGORY,
        payload: {
          categories: res.data,
          message: message
        },
      });
    })
    .catch((error) => {
      console.log(error);
    });
};

// Detail category
export const detailCategory = (id) => (dispatch) => {
  axios
    .get(`http://127.0.0.1:8000/api/category/${id}/`)
    .then((res) => {
      // console.log(res.data);
      dispatch({
        type: Types.RETRIVE_CATEGORY,
        payload: res.data,
      });
    })
    .catch((error) => {
      console.log(error);
    });
};

// Delete category
export const deleteCategory = (id) => (dispatch) => {
  axios
    .delete(`http://127.0.0.1:8000/api/category/${id}/`)
    .then((res) => {
      dispatch({
        type: Types.DELETE_CATEGORY,
        payload: {
          id: res.data.id,
        },
      });
    })
    .catch((error) => {
      console.log(error);
    });
};
