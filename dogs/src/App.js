import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { UserStorage } from './UseContext/UserContext';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Pages/Home';
import Login from './Pages/Login';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <UserStorage>
          <Header />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/login/*' element={<Login />} />
            </Routes>
          <Footer /> 
        </UserStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
