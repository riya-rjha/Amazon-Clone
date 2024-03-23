import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import auth from '../firebase.js';
import { Link } from 'react-router-dom';

const Login = () => {

  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  const loginAccount = (e) => {
    e.preventDefault();
    if (!isValidEmail(email)) {
      alert('Enter a valid Email ID');
      return;
    }
    signInWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        console.log(auth);
        navigate('/');
      })
      .catch((error) => {
        alert('No account with those credentials exist!');
        console.log(error.message);
      })
  }

  const registerAccount = (e) => {
    e.preventDefault();
    if (!isValidEmail(email)) {
      alert('Enter a valid Email ID');
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        navigate('/');
      })
      .catch((error) => {
        alert('Account already exists! Kindly log into the existing account!')
        console.log(error.message);
      })
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md my-20 ">
        <h2 className="text-2xl font-semibold text-center mb-4">Sign In</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-semibold">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-yellow-200"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 font-semibold">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-yellow-200"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-4 flex justify-between items-center">
            <label htmlFor="remember" className="flex items-center">
              <input type="checkbox" id="remember" name="remember" className="mr-2" />
              <span className="text-gray-700">Remember me</span>
            </label>
            <Link to='/' className="text-yellow-500 hover:underline">
              Back to Homepage?
            </Link>
          </div>
          <button
            type="submit"
            className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 
          transition duration-300 w-full"
            onClick={(e) => loginAccount(e)}
          >
            Log In
          </button>
        </form>
        <hr className="my-4 border-gray-300" />
        <div className="text-center">
          <button
            className="bg-gray-100 text-gray-700 px-4 py-2 rounded-md 
          hover:bg-gray-200 transition duration-300 mr-2"
            type='submit'
            onClick={(e) => registerAccount(e)}
          >
            Create Account
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
