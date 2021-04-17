import { POST_INFO_FAIL, POST_INFO_REQUEST, POST_INFO_SUCCESS } from "../types";

const initialState = {
  text: "",
  loading: false,
  item: "",
};
export const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_INFO_SUCCESS:
      return {
        ...state,
        text: action.payload.text,
        loading: false,
        posts: action.payload.posts,
        item: action.payload.item,
      };
    case POST_INFO_FAIL:
      return {
        ...state,
        text: "",
        posts: [],
        loading: false,
      };
    case POST_INFO_REQUEST:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
