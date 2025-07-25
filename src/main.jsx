import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import ProductDetails from './components/ProductDetails.jsx'
import AboutUs from './components/AboutUs.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/product-details" element={<ProductDetails />} />
      <Route path="/about-us" element={<AboutUs />} />
    </Routes>
  </BrowserRouter>,
)
