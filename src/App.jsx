import React from 'react';
import Header from './Components/Header.jsx';
import { Route, Routes } from 'react-router-dom';
import MainPage from './Components/MainPage.jsx';
import Product from './Components/Product.jsx';

const App = () => {
  return (
    <Routes >
      <Route path='/checkout' ></Route>
      <Route path='/login' ></Route>
      <Route path='/' element={<><Header /><MainPage /><Product/></>}></Route>
    </Routes>
  )
}

export default App