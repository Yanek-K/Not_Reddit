import { SEARCH_SUCCESS, SEARCH_FAIL, SEARCH_REQUEST } from "../types";
import axios from "axios";

export const getSearch = (text) => async (dispatch) => {
  try {
    dispatch({ type: SEARCH_REQUEST });

    const res = await fetch(`https://www.reddit.com/r/${text}.json`);
    const posts = await res.json();

    const resp = await fetch(`https://www.reddit.com/r/${text}/about.json`);
    const about = await resp.json();

    dispatch({
      type: SEARCH_SUCCESS,
      payload: {
        posts,
        about,
      },
    });
  } catch (err) {
    dispatch({
      type: SEARCH_FAIL,
      payload: err.message,
    });
  }
};
