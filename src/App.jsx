
import { Routes, Route } from "react-router-dom";
import { Router } from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Shop from './pages/Shop'
import Product from './pages/Product'
import Cart from './pages/Cart'
import LoginSignup from "./pages/LoginSignup";
import Footer from "./components/footer/Footer";
import ShopCategory from "./pages/ShopCategory";
import men_banner from './assets/banner.jpg'
import women_banner from './assets/women_banner.avif'
import kids_banner from './assets/kids_banner.jpg'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/men" element={<ShopCategory banner={men_banner} category="men" />} />
        <Route path="/women" element={<ShopCategory banner={women_banner} category="women" />} />
        <Route path="/kids" element={<ShopCategory banner={kids_banner} category="kid" />} />
        <Route path="/product" element={<Product />} />
        <Route path=":productId" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<LoginSignup />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
