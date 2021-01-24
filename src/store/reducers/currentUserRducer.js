import * as Types from "../actions/types";

const currentUserReducer = (state = {}, action) => {
  switch (action.type) {
    case Types.CURRENT_USER:
      return {
        ...state,
        user: action.payload.user,
      };
    default:
      return state;
  }
};

export default currentUserReducer;
