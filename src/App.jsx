import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home/Home'
import ShopMain from './pages/Shop/Shop'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import ProductDetail from './Components/ProductDetail/ProductDetail'

function App() {
  return (
    <>
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/Shop' element={<ShopMain/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path="/product/:id" element={<ProductDetail />} />
  </Routes>
  </BrowserRouter>
    </>
  )
}

export default App