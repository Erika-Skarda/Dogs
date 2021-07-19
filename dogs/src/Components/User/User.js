import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useUser } from '../../UseContext/UserContext';
import UserHeader from './UserHeader/UserHeader';
import UserPhotoPost from './UserPhotoPost/UserPhotoPost';
import UserStats from './UserStats/UserStats';
import Feed from '../Feed/Feed';

const User = () => {
  const { data } = useUser();

  return (
    <section className="container">
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed user={data.id}/>}/>
        <Route path="postar" element={<UserPhotoPost/>}/>
        <Route path="estatisticas" element={<UserStats/>}/>
      </Routes>
    </section>
  );
}

export default User;