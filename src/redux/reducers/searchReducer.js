import { SEARCH_SUCCESS, SEARCH_FAIL, SEARCH_REQUEST } from "../types";

const initialState = {
  text: "",
  posts: [],
  about: [],
  loading: false,
};

export const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_SUCCESS:
      return {
        ...state,
        text: action.payload.text,
        posts: action.payload.posts,
        about: action.payload.about,
        loading: false,
      };
    case SEARCH_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case SEARCH_FAIL:
      return {
        ...state,
        posts: [],
        about: [],
        loading: false,
      };
    default:
      return state;
  }
};
