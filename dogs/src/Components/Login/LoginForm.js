import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Input from '../Forms/Input/Input.js';
import Button from '../Forms/Buttons/Button.js';

const LoginForm = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e) {
    e.prevent.default();
    fetch(`https://dogsapi.origamid.dev/json/jwt-auth/v1/token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password }), 
    }).then((response) => {
      console.log("aqui", response)
      return response.json();
    }).then(json => {
      console.log(json);
    })
  }

  return (
    <section>
      <h1>Login</h1>
      <form action="" onSubmit={handleSubmit}>
        <Input
          label="Usuário"
          name="usernaame"
          type='text'
        />
         <Input
          label="Senha"
          type="password"
          name="password"
        />

        <Button>Entrar</Button>
      </form>
      <Link to="/login/criar" >Cadastro</Link>
    </section>
  )
}

export default LoginForm