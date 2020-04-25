import {
  LOADING_START,
  USER_REGISTRATION_SUCCESS,
  USER_REGISTRATION_ERROR,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_ERROR,
  SET_USER_MODE,
  LOGOUT_SUCCESS,
  LOGOUT_ERROR,
} from "../types";

const initalState = {
  isLoading: false,
  user: null,
  isError: false,
  errorMessage: null,
  userMode: null,
};

const authReducer = (state = initalState, action) => {
  switch (action.type) {
    case LOADING_START:
      return {
        ...state,
        isLoading: true,
      };
    case SET_USER_MODE:
      return {
        ...state,
        ...action.payload,
      };
    case UPDATE_PROFILE_SUCCESS:
    case UPDATE_PROFILE_ERROR:
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
    case LOGOUT_SUCCESS:
    case LOGOUT_ERROR:
    default:
      return state;
  }
};

export default authReducer;
