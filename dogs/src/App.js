import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { UserStorage } from './UseContext/UserContext';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import User from './Components/User/User';
import Photo from './Components/Photo/Photo/Photo';
import ProtectedRoute from './Components/Helper/ProtectedRoute';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <UserStorage>
          <Header />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='login/*' element={<Login />} />
              <ProtectedRoute path='conta/*' element={<User />} />
              <Route path='foto/:id' element={<Photo />} />
            </Routes>
          <Footer /> 
        </UserStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
