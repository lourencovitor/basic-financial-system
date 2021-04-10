/* eslint-disable import/no-anonymous-default-export */
import {
  GET_EXTRY_AND_EXIT_TYPE,
  GET_EXTRY_AND_EXIT_TYPE_SUCCESS,
  GET_EXTRY_AND_EXIT_TYPE_ERROR,
  POST_EXTRY_AND_EXIT_TYPE,
  POST_EXTRY_AND_EXIT_TYPE_SUCCESS,
  POST_EXTRY_AND_EXIT_TYPE_ERROR,
} from "../actions";

const INITIAL_STATE = {
  loading: false,
  entryandExit: [],
  loadingList: { [GET_EXTRY_AND_EXIT_TYPE]: false },
  error: "",
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_EXTRY_AND_EXIT_TYPE:
      return {
        ...state,
        loadingList: { ...state.loadingList, [GET_EXTRY_AND_EXIT_TYPE]: true },
        error: false,
      };
    case GET_EXTRY_AND_EXIT_TYPE_SUCCESS:
      return {
        ...state,
        entryandExit: action.payload,
        loadingList: { ...state.loadingList, [GET_EXTRY_AND_EXIT_TYPE]: false },
        error: false,
      };
    case GET_EXTRY_AND_EXIT_TYPE_ERROR:
      return {
        ...state,
        loadingList: { ...state.loadingList, [GET_EXTRY_AND_EXIT_TYPE]: false },
        error: true,
      };
    case POST_EXTRY_AND_EXIT_TYPE:
      return {
        ...state,
        loadingList: { ...state.loadingList, [POST_EXTRY_AND_EXIT_TYPE]: true },
        error: false,
      };
    case POST_EXTRY_AND_EXIT_TYPE_SUCCESS:
      return {
        ...state,
        loadingList: {
          ...state.loadingList,
          [POST_EXTRY_AND_EXIT_TYPE]: false,
        },
        error: false,
      };
    case POST_EXTRY_AND_EXIT_TYPE_ERROR:
      return {
        ...state,
        loadingList: {
          ...state.loadingList,
          [POST_EXTRY_AND_EXIT_TYPE]: false,
        },
        error: true,
      };
    default:
      return state;
  }
};
