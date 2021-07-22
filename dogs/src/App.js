import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { UserStorage } from './UseContext/UserContext';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import User from './Components/User/User';
import UserProfile from './Components/User/UserProfile/UserProfile'
import Photo from './Components/Photo/Photo/Photo';
import NotFound from './Components/NotFound/NotFound';
import ProtectedRoute from './Components/Helper/ProtectedRoute';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <UserStorage>
          <Header />
          <main className="AppBody">
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='login/*' element={<Login />} />
              <ProtectedRoute path='conta/*' element={<User />} />
              <Route path='foto/:id' element={<Photo />} />
              <Route path='perfil/:user' element={<UserProfile />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </main>
          <Footer /> 
        </UserStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
