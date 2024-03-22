import React from 'react';
import Header from './Components/Header.jsx';
import { Route, Routes } from 'react-router-dom';
import MainPage from './Components/MainPage.jsx';
import Product from './Components/Product.jsx';
import Login from './Pages/Login.jsx'
import Checkout from './Pages/Checkout.jsx';

const App = () => {
  return (
    <Routes >
      <Route path='/checkout' element={<Checkout />}>
      </Route>
      <Route path='/login' element={<Login />}>
      </Route>
      <Route path='/' element={<><Header /><MainPage /><Product /></>}></Route>
    </Routes>
  )
}

export default App