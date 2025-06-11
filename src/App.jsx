import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Categories from './pages/Categories'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Register from './pages/Register'
import Deals from './pages/Deals'
import SignInPage from './components/Signin'
function App() {
  

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/register" element={<Register/>} />
          <Route path="/deals" element={<Deals />} />
          <Route path="/signin" element={<SignInPage />} />
          {/* Add more routes here as needed */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
