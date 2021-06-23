import React, { createContext, useState }  from 'react';
import { TOKEN_POST, USER_GET } from '../Api/api';
import { getToken } from '../Utils/constants';

export const UserContext = createContext();

export const UserStorage = ({ children }) => {
  const [data, setData] = useState(null);
  const [login, setLogin] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  async function getUser(token) {
    const { url, options } = USER_GET(token);
    const response = await fetch(url, options);
    const json = await response.json();
    setData(json);
    setLogin(true)
  }

  async function userLogin(username, password) {
    const { url, options } = TOKEN_POST({ username, password });
    const tokenResponse = await fetch(url, options);
    const { token } = await tokenResponse.json();
    window.localStorage.setItem('token', token);
    getUser(token);
  }

  return (
    <UserContext.Provider value = {{ userLogin, data }}>
     {children}
    </UserContext.Provider>
  )
}
