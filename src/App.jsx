

import './App.css'

import { Route, Routes } from "react-router-dom";

import HomePage from '../pages/HomePage';
import BooksPage from '../pages/BooksPage';
import UserPage from '../pages/UserPage';
import AdminPage from '../pages/AdminPage';

import Navbar from '../components/Navbar';

import { StrictMode } from 'react'
import { BrowserRouter } from "react-router-dom";



function App() {

  return (

    // <>
    <BrowserRouter>
      <StrictMode>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/books' element={<BooksPage />} />
          <Route path='/user' element={<UserPage />} />
          <Route path='/admin' element={<AdminPage />} />
        </Routes>
      </StrictMode>
    </BrowserRouter>
    // </>

  )

}
export default App

