import React, { useState } from 'react';
import FeedModal from './FeedModal/FeedModal';
import FeedPhoto from './FeedPhoto/FeedPhoto';

const Feed = () => {

  const [modalPhoto, setModalPhoto] = useState(null);

  return (
    <div>
      { modalPhoto && 
        <FeedModal photo={modalPhoto} setModalPhoto={setModalPhoto} 
      /> }
      <FeedPhoto setModalPhoto={setModalPhoto}/>
    </div>
  );
}

export default Feed;