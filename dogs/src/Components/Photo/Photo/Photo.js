import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../../../Hooks/useFetch';
import { PHOTO_GET } from '../../../Api/api';
import Error from '../../Helper/Error';
import Head from '../../Helper/Head';
import Loading from '../../Helper/Loading/Loading';
import PhotoContent from '../PhotoContent/PhotoContent';

const Photo = () => {
  const { id } = useParams();
  const { data, loading, error, request } = useFetch();

  useEffect (() => {
    const { url, options } = PHOTO_GET(id);
    request(url, options);
  },[request, id])

  if(error) return <Error error={error}/>;
  if(loading) return <Loading />;
  if(data) return( 
    <section className="container mainContainer">
      <Head title={data.photo.title}/>
      <PhotoContent data={data} single={true}/>
    </section>
  )
  else return null;
}

export default Photo;
