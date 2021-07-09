import React, { useState, Fragment, useRef, useEffect } from 'react';
import  { useUser } from '../../../UseContext/UserContext';
import PhotoCommentsForm from '../PhotoCommentsForm/PhotoCommentsForm';
import styles from './PhotoComments.module.css';

const PhotoComments = (props) => {
  const [comments, setComments] = useState(() => props.comments);
  const commentsSection = useRef(null);
  const { login } = useUser();

  useEffect(() => {
    commentsSection.current.scrollTop = commentsSection.scrollHeight;
  }, [comments]);

  return (
    <Fragment>
      <ul ref={commentsSection} className={styles.comments}>
        {comments.map((comment) => (
          <li key={comment.comment_ID}>
            <b>{comment.comment_author}: </b>
            <span>{comment.comment_content}</span>
          </li>
        ))}
      </ul>
      {login && <PhotoCommentsForm id={props.id} setComments={setComments}/>}
    </Fragment>
  );
}

export default PhotoComments;
