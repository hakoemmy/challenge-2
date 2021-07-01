import {
    SEARCH_PHOTO_ERROR,
    SEARCH_PHOTO_SUCCESS
  } from "../../actionTypes/searchPhotosActionTypes";
  
  import initialState from "../../store/initialState";
  
  const searchPhoto = (state = initialState, action) => {
    switch (action.type) {
      case SEARCH_PHOTO_SUCCESS:
        return {
          ...state,
          searchPhotoSuccess: action.payload
        };
      case SEARCH_PHOTO_ERROR:
        return {
          ...state,
          searchPhotoError: action.payload
        };
      default:
        return state;
    }
  };
  
  export default searchPhoto;
  