import React from 'react';
import '../styles/PhotosArea.css';

const PhotosArea = ({ foundPhotos, albumId, error, loading }) => {
    return (
        <section id="content">
          <div className="container">
              <div className="results-list">
                  <div className="row">
                   {
                     foundPhotos.length!== 0?
                      foundPhotos.map((photo) =>   
                       <figure className="column" key ={photo.thumbnailUrl}>
                         <p><img src={photo.thumbnailUrl} width="200" height="200" alt="Photo"/> </p>
                         <figcaption>{photo.title}</figcaption>
                        </figure> 
                      
                      ):
                        (
                        <div id="no-search-match">
                          <h3>{albumId === 0?'': loading?'Searching...':'No photos found in this album!'}</h3>
                         </div>
                        )   
                    }   
                  </div>

                     <div id="api-error-div">
                         {
                            error.length?
                            (
                              <>
                             <h3>Oops!</h3>
                              <h4>It’s not you. It’s us. Give it another try, please.</h4>
                              </> 
                            ):
                            <></>
                         }
                     </div>
                     {
                        foundPhotos.length === 0 && albumId === 0?
                        (
                          <div id="no-search-match">
                             <h3>The photos you search will be displayed here!</h3>
                           </div>
                        ):
                        <></>
                     }
                     
             </div>	
          </div>
       </section>
    );
};

export default PhotosArea;
