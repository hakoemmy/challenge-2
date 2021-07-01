import { combineReducers } from "redux";
import searchPhotoReducer from "./searchPhoto";

export default combineReducers({
    searchPhoto: searchPhotoReducer
});