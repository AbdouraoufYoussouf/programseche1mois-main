import { Route, Routes } from 'react-router-dom';
import React from 'react';
import './App.css';
import { Boutique } from './pages/boutique/Boutique';
import { Provider } from 'react-redux';
import { store } from './Redux/Store';
import NavBar from './components/NavBar';
import Home from './pages/sport/Home';
import { Details } from './pages/sport/program/Details';
import { Program } from './pages/sport/program/Program';

function App() {
  return (
    <Provider store={store}>
    
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='programmseche' element={<Home/>} />
        <Route path='boutique' element={<Boutique/>} />
        <Route path='program/:idP' element={<Program/>} />
        <Route path='program/:idP/detail/:idItem' element={<Details/>} />
        <Route path='program/detail/:id' element={<Details/>} />
      </Routes>


    </Provider>
  );
}

export default App;
