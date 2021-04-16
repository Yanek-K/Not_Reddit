import { SEARCH_SUCCESS, SEARCH_FAIL, SEARCH_REQUEST } from "../types";
import axios from "axios";

export const getSearch = (text) => async (dispatch) => {
  try {
    dispatch({ type: SEARCH_REQUEST });
    const [postRequest, aboutRequest] = await Promise.all([
      axios.get(`https://www.reddit.com/r/${text}.json`),
      axios.get(`https://www.reddit.com/r/${text}/about.json`),
    ]).then((res) => {
      dispatch({
        type: SEARCH_SUCCESS,
        payload: text,
        posts: postRequest,
        about: aboutRequest,
      });
    });
  } catch (err) {
    dispatch({
      type: SEARCH_FAIL,
      payload: [],
    });
  }
};
