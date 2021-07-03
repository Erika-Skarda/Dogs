import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useUser } from '../../UseContext/UserContext';

const ProtectedRoute = (props) => {
  
  const { login } = useUser();

  if(login === true) return <Route {...props} />
  else if (login === false) return <Navigate to="/login" />
  else return null

}

export default ProtectedRoute;