import React, { useEffect } from 'react';
import Header from './Components/Header.jsx';
import { Route, Routes } from 'react-router-dom';
import MainPage from './Components/MainPage.jsx';
import Product from './Components/Product.jsx';
import Login from './Pages/Login.jsx';
import Checkout from './Pages/Checkout.jsx';
import Footer from './Components/Footer.jsx';
import auth from './firebase.js'
import { useStateValue } from './Components/StateProvider.jsx';

const App = () => {

  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }
      else {
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
    return () => {
      //Clean Up if required when the App component re-renders
      unsubscribe();
    }
  }, []);

  console.log("The user is : ", user)

  return (
    <Routes >
      <Route path='/checkout' element={<><Checkout /><Footer /></>}>
      </Route>
      <Route path='/login' element={<Login />}>
      </Route>
      <Route path='/' element={<><Header /><MainPage /><Product /><Footer /></>}></Route>
    </Routes>
  )
}

export default App