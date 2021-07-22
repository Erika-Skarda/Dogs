import React, { useEffect } from 'react';
import { PHOTOS_GET } from '../../../Api/api';
import Error from '../../../Components/Helper/Error';
import Loading from '../../../Components/Helper/Loading/Loading';
import useFetch from '../../../Hooks/useFetch';
import FeedPhotosItem from '../FeedPhotosItem/FeedPhotosItem';
import styles from './FeedPhoto.module.css';

const FeedPhoto = ({ page, user, setModalPhoto, setInfinite }) => {
  const { data, loading, error, request } = useFetch();

  useEffect (() => {
    async function fetchPhotos() {
      const total = 6;
      const { url, options } = PHOTOS_GET({ page: page, total: total, user: user });
      const {response, json} = await request(url, options);
      if(response && response.ok && json.length < total) setInfinite(false);
    }
    fetchPhotos();
  },[request, user, page, setInfinite])

  if (error) return <Error error={error} />
  if (loading) return <Loading/>
  if (data)
  return (
    <ul className={`${styles.feed} animeLeft`}>
      {data.map((photo) => (

      <FeedPhotosItem 
        key={photo.id} 
        photo={photo} 
        setModalPhoto={setModalPhoto}
      />
      ))}
    </ul>
  );
  else return null;
}

export default FeedPhoto;
