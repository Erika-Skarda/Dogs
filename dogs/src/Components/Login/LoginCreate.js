import React from 'react';

import Input from '../Forms/Input/Input.js';
import Button from '../Forms/Buttons/Button.js';
import Error from '../Helper/Error';

import { USER_POST } from '../../Api/api';

import useForm from '../../Hooks/UseForm';
import { useUser } from '../../UseContext/UserContext';
import useFetch from '../../Hooks/useFetch.js';

const LoginCreate = () => {

  const username = useForm();
  const email = useForm('email');
  const password = useForm(); //'password

  const { userLogin } = useUser();

  const { loading, error, request } = useFetch();
  
  async function handleSubmit (e) {
    e.preventDefault();

    const { url, options } = USER_POST({ 
      username: username.value,
      email: email.value, 
      password: password.value
    })
    const { response } = await request(url, options);
    if(response.ok) userLogin(username.value, password.value);
  }

  return (
    <section className="animeLeft">
      <h1 className="title">Cadastre-se</h1>
      <form onSubmit={handleSubmit}>
        <Input
          label="Usuário"
          type="text"
          name="username"
          {...username}
        />
        <Input
          label="Email"
          type="text"
          name="email"
          {...email}
        />
        <Input
          label="Senha"
          type="password"
          name="senha"
          {...password}
        />
        {loading ? <Button disabled>Cadastrando ... </Button> : <Button>Cadastrar</Button>}
        <Error error={error}/>
      </form>
    
    </section>
  )
}

export default LoginCreate