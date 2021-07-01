
import { combineReducers } from "redux";
import photoReducers from "./photosReducer";

export default combineReducers({
  photo: photoReducers
});