

import './App.css'

import { Route, Routes } from "react-router-dom";

import HomePage from '../pages/HomePage';
import BooksPage from '../pages/BooksPage';
import UserPage from '../pages/UserPage';
import AdminPage from '../pages/AdminPage';

import Navbar from '../components/Navbar';

import { StrictMode } from 'react'
import { BrowserRouter } from "react-router-dom";



import { SignedIn, SignedOut, SignUp } from '@clerk/clerk-react';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Dashboard from '../pages/dashboard';
//import Dashboard from '../pages/Dashboard';
//import Dashboard from '../pages/Dashboard';

import Layout from '../layouts/Layout';
import UserLayout from '../layouts/UserLayout';




function App() {

  return (

    // <>
    <BrowserRouter>
      <StrictMode>
        <Navbar />


        <Routes>
          <Route path='/' element={<SignedOut> <Layout/>  </SignedOut>}>
            <Route path='/signup' element={<Signup />} />
            <Route path='/login' element={<Login />} />
          </Route>
          <Route  path='/' element={<SignedIn>  <UserLayout/> </SignedIn>}>
            <Route path='/dashboard' element={<Dashboard />} />
          </Route>




          <Route path='/home' element={<HomePage />} />
          <Route path='/books' element={<BooksPage />} />
          <Route path='/user' element={<UserPage />} />
          <Route path='/admin' element={<AdminPage />} />
          {/* <Route path='/dashboard' element={<Dashboard />} /> */}




          {/* <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} /> */}


        </Routes>


      </StrictMode>
    </BrowserRouter>
    // </>

  )

}
export default App

