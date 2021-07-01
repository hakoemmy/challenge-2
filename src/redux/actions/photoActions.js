import {
   SEARCH_PHOTO_ERROR,
   SEARCH_PHOTO_SUCCESS
  } from "../actionTypes/searchPhotosActionTypes";
  
  import apiCall from "../../helpers/apiCall";
  
  export const searchPhotoAction = (albumID) => async (dispatch) => {
    try {
      const searchPhotosResponse = await apiCall.get(`/albums/${albumID}/photos`);
      dispatch({
        type: SEARCH_PHOTO_SUCCESS,
        payload: searchPhotosResponse
      });
    } catch (error) {
      dispatch({
        type: SEARCH_PHOTO_ERROR,
        payload: error.response
      });
    }
  };
