import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { searchReducer } from "./reducers/searchReducer";
import { postReducer } from "./reducers/postReducer";

const initialState = {};
const rootReducer = combineReducers({
  search: searchReducer,
  post: postReducer,
});

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
