import React, { useContext } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import  { useUser } from '../../UseContext/UserContext';

import LoginForm from '../../Components/Login/LoginForm/LoginForm';
import LoginCreate from '../../Components/Login/LoginCreate';
import LoginPasswordLost from '../../Components/Login/LoginPasswordLost';
import LoginPasswordReset from '../../Components/Login/LoginPasswordReset';

import styles from './Login.module.css';

const Login = () => {
  const { login } = useUser();

  if(login === true) return <Navigate to="/conta" />;
  return (
    <section className={styles.login}>
      <div className={styles.forms}>
        <Routes>
          <Route path="/" element={<LoginForm />}/>
          <Route path="criar" element={<LoginCreate/>}/>
          <Route path="perdeu" element={<LoginPasswordLost />}/>
          <Route path="resetar" element={<LoginPasswordReset />}/>
        </Routes>
      </div>
    </section>
  )
}

export default Login