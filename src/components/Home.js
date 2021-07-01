import React, {useEffect, useState} from 'react';
import { connect } from "react-redux";
import '../styles/Home.css';
import Navigation from './Navigation';
import Footer from './Footer';
import PhotosArea from './PhotosArea';
import { searchPhotoAction } from '../redux/actions/photoActions';

const  Home = ({
  searchPhotoAction,
  searchPhotoState
}) => {

  const [photos, setPhotos] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [albumId, setAlbumId] = useState(0);
  const searchPhotoByAlbumId = (id) => {
    setLoading(true);
    searchPhotoAction(id);
    setAlbumId(id);
  };



  useEffect(() => {
    if(searchPhotoState.searchPhotoSuccess?.status === 200){
      setPhotos(searchPhotoState.searchPhotoSuccess.data);
      setLoading(false);
    }
    
    if(searchPhotoState.searchPhotoError?.status){
      setError(searchPhotoState.searchPhotoError);
      setLoading(false);
    }

  },[
    photos,
    searchPhotoState.searchPhotoSuccess,
    searchPhotoState.searchPhotoError
  ])
  return (
    <div id="page-container">
      <div id="content-wrap">
         <Navigation searchPhoto = {searchPhotoByAlbumId} loading = {loading}/>
         <PhotosArea foundPhotos = {photos} albumId = {albumId} error={error} loading={loading}/>
         <Footer/>
        </div>
   </div>

  );
}

const mapStateToProps = (state) => {
  return { searchPhotoState: state.photo.searchPhoto };
};

const mapDispatchToProps = { searchPhotoAction };


export default connect(mapStateToProps, mapDispatchToProps)(Home);

