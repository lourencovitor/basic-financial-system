import {
  GET_EXTRY_AND_EXIT_TYPE,
  GET_EXTRY_AND_EXIT_TYPE_SUCCESS,
  GET_EXTRY_AND_EXIT_TYPE_ERROR,
  POST_EXTRY_AND_EXIT_TYPE,
  POST_EXTRY_AND_EXIT_TYPE_SUCCESS,
  POST_EXTRY_AND_EXIT_TYPE_ERROR,
} from "../actions";

export const getExtryAndExitType = (userId) => {
  return {
    type: GET_EXTRY_AND_EXIT_TYPE,
    payload: { userId },
  };
};

export const getExtryAndExitTypeSuccess = (entryandExit) => {
  return {
    type: GET_EXTRY_AND_EXIT_TYPE_SUCCESS,
    payload: entryandExit,
  };
};

export const getExtryAndExitTypeError = (error) => ({
  type: GET_EXTRY_AND_EXIT_TYPE_ERROR,
  payload: error,
});

export const postExtryAndExitType = (data, callback) => {
  return {
    type: POST_EXTRY_AND_EXIT_TYPE,
    payload: { data, callback },
  };
};

export const postExtryAndExitTypeSuccess = () => {
  return {
    type: POST_EXTRY_AND_EXIT_TYPE_SUCCESS,
  };
};

export const postExtryAndExitTypeError = (error) => ({
  type: POST_EXTRY_AND_EXIT_TYPE_ERROR,
  payload: error,
});
