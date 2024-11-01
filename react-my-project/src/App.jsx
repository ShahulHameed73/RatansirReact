import React from 'react'
import Home from './Home'
import Veg from './Veg'
import NonVeg from './NonVeg'
import Cart from './Cart'
import PurchaseHistory from './PurchaseHistory'
import AboutUs from './AboutUs'
import Contactus from './Contactus'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <>
    <BrowserRouter>
    <nav>
    <Link to="/">Home</Link>
    <Link to="/veg">veg items..</Link>
    <Link to="/nonveg">nonVeg items..</Link>
    <Link to="/Cart">cart</Link>
    <Link to="/purchaseHistory">purchaseHistory</Link>
    <Link to="aboutUs">aboutUs..</Link>
    <Link to="contactUS">ContactUs..</Link>
    </nav>

    <Routes>

      <Route path="/" element={<Home/>}/>
      <Route path="/veg"element={<Veg/>}/>
      <Route path="/nonveg"element={<NonVeg/>}/>
      <Route path="/Cart"element={<Cart/>}/>
      <Route path="/purchaseHistory"element={<PurchaseHistory/>}/>
      <Route path="aboutUs"element={<AboutUs/>}/>
      <Route path="contactUS"element={<Contactus/>}/>

    </Routes>
    
    
    
    
    
    
    </BrowserRouter>
      
    </>
  )
}

export default App
