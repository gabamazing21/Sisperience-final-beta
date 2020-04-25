import {
  USER_LOADING_START,
  USER_REGISTRATION_SUCCESS,
  USER_REGISTRATION_ERROR,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  SUBMIT_REPORT_ERROR,
  SUBMIT_REPORT_SUCCESS,
} from "../types";

const initalState = {
  isLoading: false,
};

const userReducer = (state = initalState, action) => {
  switch (action.type) {
    case USER_LOADING_START:
      return {
        ...state,
        isLoading: true,
      };
    case SUBMIT_REPORT_SUCCESS:
    case SUBMIT_REPORT_ERROR:
      return {
        ...state,
        ...action.payload,
      };
    case USER_REGISTRATION_SUCCESS:
    case USER_REGISTRATION_ERROR:
      return {
        ...state,
        ...action.payload,
      };
    case LOGIN_SUCCESS:
    case LOGIN_ERROR:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
