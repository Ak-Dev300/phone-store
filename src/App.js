import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from "./components/NavBar"
import Cart from './pages/cartFolder/Cart';
import Shop from './pages/shopFolder/Shop';
import "./index.css"
import ShopContextProvider from './context/shopContext';


const App = () => {
  return (
    <ShopContextProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </Router>
    </ShopContextProvider>
  )
}

export default App
