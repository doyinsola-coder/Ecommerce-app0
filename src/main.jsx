import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import React from 'react'
import { CartProvider } from './pages/CartContext.jsx'
import { AuthProvider } from './pages/AuthContext.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
<CartProvider>
  <App />
  </CartProvider>
  </AuthProvider>
  </StrictMode>,
)
