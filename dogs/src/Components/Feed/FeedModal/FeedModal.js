import React, { useEffect, useState } from 'react';
import useFetch from '../../../Hooks/useFetch';
import { PHOTO_GET } from '../../../Api/api';
import Error from '../../Helper/Error';
import Loading from '../../Helper/Loading';
import PhotoContent from '../../Photo/PhotoContent/PhotoContent';
import styles from './FeedModal.module.css';

const FeedModal = ({ photo, setModalPhoto }) => {

  const { data, error, loading, request } = useFetch();
  
  useEffect(() => {
    const { url, options } = PHOTO_GET(photo.id);
    request(url, options);

  }, [photo, request]);

  function handleOutsideClick(e) {
    if(e.target === e.currentTarget) setModalPhoto(null);
  }

  console.log(photo)
  return (
    <div className={styles.modal} onClick={handleOutsideClick}>
      {error && <Error error={error}/>}
      {loading && <Loading/>}
      {data &&  <PhotoContent data={data}/>}
    </div>
  );
}

export default FeedModal;
