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
import Contact from './pages/Contact'
import { CartProvider } from './pages/CartContext'
import Products from './pages/Products'
import CheckoutPage from './pages/CheckoutPage'
function App() {
  

  return (
    <>
      <BrowserRouter>
<CartProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/register" element={<Register/>} />
          <Route path="/deals" element={<Deals />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<h1 className='text-3xl text-center mt-10'>Page Not Found</h1>} />
          <Route path="/cart" element={<Products />} />
          <Route path="/checkout" element={<CheckoutPage />} />
        </Routes>
        <Footer />
        </CartProvider>
      </BrowserRouter>
    </>
  )
}

export default App
