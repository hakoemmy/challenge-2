import React, { useState} from 'react';
import '../styles/Navigation.css';
const Navigation = ({ searchPhoto, loading}) => {
  const [albumId, setAlbumId] = useState(0);
  const searchAlbum = (e) => {
    e.preventDefault();
    if(Number.isInteger(Number(albumId)) && Number(albumId)!== 0){
      searchPhoto(albumId);
    }else{
      alert('Album ID should be provided and only numbers are allowed');
    }
  };

  const handleInputChange = (e) => {
    const attributeName = e.target.name;
    const attributeValue = e.target.value;
    setAlbumId(attributeValue);
  };


    return (
     <header>
       <div>
         <div className="container">
          <div id="branding-title">
          <h1>search<span className="highlight">Photo</span></h1>
          </div>
          <form onSubmit={searchAlbum}>
             <input type="number" id="search-term" onChange={handleInputChange} placeholder="Put in album ID"/>
             <button type="submit"> {loading?'Searching...': 'Get Album Photos By Id'} </button>
          </form>
          </div>
        </div>
     </header>
    );
};

export default Navigation;
