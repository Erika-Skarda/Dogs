import React from 'react';
import { Routes, Route } from 'react-router-dom';
import useForm from '../../Hooks/UseForm';
import useFetch from '../../Hooks/useFetch';
import Input from '../../Components/Forms/Input/Input.js';
import Button from '../../Components/Forms/Buttons/Button.js';
import { PASSWORD_LOST } from '../../Api/api';
import Error from '../Helper/Error';

const LoginPasswordLost = () => {
  const login = useForm();
  const { data, loading, error, request } = useFetch();

  console.log(window.location)
  async function handleSubmit(e) {
    e.preventDefault();

    if(login.validate()) {
      const { url, options } = PASSWORD_LOST({ 
        login: login.value, 
        url: window.location.href.replace('perdeu', 'resetar') 
      });
      const { json } = await request(url, options)
    }
  }

  return (
    <section>
      <h1 className="title">Perdeu a senha ?</h1>
      {data ? <p style={{color: '#4c1'}}>{data}</p> : (
        <form onSubmit={handleSubmit}>
          <Input
            label="Email / Usuário" 
            type="text" 
            name="login"
            {...login}
          />
          {loading ? <Button disabled>Enviando ...</Button> : <Button>Enviar Email</Button>}
        </form>
      )}
      <Error error={error}/>
    </section>
  );
}

export default LoginPasswordLost