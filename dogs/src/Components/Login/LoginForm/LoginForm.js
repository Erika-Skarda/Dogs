import React from 'react';
import { Link } from 'react-router-dom';

import useForm from '../../../Hooks/UseForm';
import { useUser } from '../../../UseContext/UserContext';

import Input from '../../Forms/Input/Input.js';
import Button from '../../Forms/Buttons/Button.js';

import Error from '../../Helper/Error';

import styles from './LoginForm.module.css';
import stylesBtn from '../../Forms/Buttons/Button.module.css';

const LoginForm = () => {
  const username = useForm();
  const password = useForm();
  const { userLogin, error, loading } = useUser();;

  async function handleSubmit(event) {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  }

  return (
    <section className="animeLeft">
      <h1 className="title">Login</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input 
          label="Usuário" 
          type="text" 
          name="username" 
          {...username} 
        />
        <Input 
          label="Senha" 
          type="password" 
          name="password" 
          {...password} 
        />
        {loading ? (
          <Button disabled>Carregando ...</Button> 
        ) : (
          <Button >Entrar</Button>
        )}
        <Error error={error}/>
      </form>
      <Link className={styles.perdeu}  to="/login/perdeu">
        Perdeu a Senha ?
      </Link>
      <div className={styles.cadastro}>
        <h2 className={styles.subtitle}>Cadastro</h2>
        <p>Ainda não possui cont Cadastre-se no site.</p>
        <Link className={stylesBtn.button} to="/login/criar">
          Cadastro
        </Link>
      </div>
    </section>
  );
};

export default LoginForm;