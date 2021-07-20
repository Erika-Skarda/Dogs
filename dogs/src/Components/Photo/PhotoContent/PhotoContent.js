import React from 'react';
import { Link } from 'react-router-dom';
import { useUser } from '../../../UseContext/UserContext';
import PhotoComments from '../PhotoComments/PhotoComments';
import PhotDelete from '../PhotoDelete/PhotoDelete';
import styles from './PhotoContent.module.css';
import Image from '../../Helper/Image/Image';

const PhotoContent = ({ data, single }) => {
  const  user  = useUser();
  const { photo, comments } = data;

  return (
    <div className={`${styles.photo} ${single ? styles.single : ''}`}>
      <div className={styles.img}>
        <Image src={photo.src} alt={photo.title}/>
        {/* <img src={photo.src} alt={photo.title} /> */}
      </div>
      <div className={styles.details}>
        <div>
          <p className={styles.author}>
            {user.data && user.data.username === photo.author 
            ? ( <PhotDelete id={photo.id} /> 
            ) : ( <Link to={`/perfil/${photo.author}`}>@{photo.author}</Link>
            )}
            <span className={styles.visualizacoes}>{photo.acessos}</span>
          </p>
          <h1 className="title">
            <Link to={`/foto/${photo.id}`}>{photo.title}</Link>
          </h1>
          <ul className={styles.attributes}>
            <li>{photo.peso} kg</li>
            <li>{photo.idade} anos</li>
          </ul>
        </div>
      </div>
      <PhotoComments id={photo.id} comments={comments} single={single} />
    </div>
  );
}

export default PhotoContent;
