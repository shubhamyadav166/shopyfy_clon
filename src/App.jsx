
import { Routes, Route } from "react-router-dom";
import { Router } from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Shop from './pages/Shop'
import Product from './pages/Product'
import Cart from './pages/Cart'
import LoginSignup from "./pages/LoginSignup";
import Footer from "./components/footer/Footer";

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Shop />} />
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
