import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useUser } from '../../UseContext/UserContext';
import UserHeader from './UserHeader/UserHeader';
import UserPhotoPost from './UserPhotoPost/UserPhotoPost';
import UserStats from './UserStats/UserStats';
import Feed from '../Feed/Feed';
import NotFound from '../NotFound/NotFound';
import Head from '../Helper/Head';

const User = () => {
  const { data } = useUser();

  return (
    <section className="container">
      <Head title="Minha Conta"/>
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed user={data.id}/>}/>
        <Route path="postar" element={<UserPhotoPost/>}/>
        <Route path="estatisticas" element={<UserStats/>}/>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </section>
  );
}

export default User;