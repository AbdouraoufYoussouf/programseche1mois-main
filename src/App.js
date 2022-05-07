import { Route, Routes } from 'react-router-dom';
import React, { Component }  from 'react';
import './App.css';
import NavBar from './components/NavBar';
import { Details } from './pages/Details';
import Home from './pages/Home';
import { Program } from './pages/Program';
import { Boutique } from './pages/boutique/Boutique';
import { Provider } from 'react-redux';
import { store } from './Redux/Store';

function App() {
  return (
    <Provider store={store}>
    <div className='App'>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='programmseche' element={<Home/>} />
        <Route path='boutique' element={<Boutique/>} />
        <Route path='program/:idP' element={<Program/>} />
        <Route path='program/:idP/detail/:idItem' element={<Details/>} />
        <Route path='program/detail/:id' element={<Details/>} />
      </Routes>
    </div>

    </Provider>
  );
}

export default App;
