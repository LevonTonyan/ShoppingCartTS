import { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import { Routes, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Home from './components/Home';
import Store from './components/Store';
import About from './components/About';
import Navbar from './components/Navbar';
import { ShoppingCartProvider } from './context/shoppingCartContext';


function App() {
 

  return (<ShoppingCartProvider>
    <Navbar/>
   <Container className='mb-4'>
      <Routes>
        <Route path='/' element={<Home/> }></Route>
        <Route path='/store' element={<Store/> }></Route>
        <Route path='/about' element={<About/> }></Route>
      </Routes>
    </Container>
  </ShoppingCartProvider>
   
  )
}

export default App
