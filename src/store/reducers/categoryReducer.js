import * as Types from "../actions/types";

const categoryReducer = (state = [], action) => {
  switch (action.type) {
    case Types.FETCH_CATEGORY:
      return action.payload.categories;
    case Types.CREATE_CATEGORY:
      return {
        ...state,
        categories: [action.payload],
      };
    case Types.RETRIVE_CATEGORY:
      return {
        ...state,
        category: action.payload,
      };
    case Types.DELETE_CATEGORY:
      let categories = [];
      return {
        ...state,
        categories: [categories.filter((cat) => cat.id !== action.payload.id)],
      };
    default:
      return state;
  }
};

export default categoryReducer;
