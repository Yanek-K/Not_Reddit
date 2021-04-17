import { POST_INFO_FAIL, POST_INFO_REQUEST, POST_INFO_SUCCESS } from "../types";

export const postAction = (text, ownProps) => async (dispatch, getState) => {
  try {
    dispatch({
      type: POST_INFO_REQUEST,
    });
    const res = await fetch(`https://www.reddit.com${text}.json`);
    const postInfo = await res.json();

    dispatch({
      type: POST_INFO_SUCCESS,
      payload: {
        text: text,
        item: postInfo,
      },
    });
  } catch (error) {
    console.log(error.message);
    dispatch({
      type: POST_INFO_FAIL,
      payload: error.message,
    });
  }
};
