import React from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Body from './components/pages/body/Body'
import Footer from './components/footer/Footer'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Order from './components/pages/order/Order'
import Home from '@mui/icons-material/Home'
import Guides from './components/pages/guids/Guides'
import Dishes from './components/pages/dishes/Dishes'
import About from './components/pages/About/About'

function App() {
  return (
    <div>
      <Router>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Body/>}/>
          <Route path='/Restaurant' element={<Body/>}/>
          <Route path='/services' element={<Guides/>} />
          <Route path='/dishes' element={<Dishes/>}/>
          <Route path='/about us' element={<About/>}/>
        </Routes>
        <Footer/>
      </Router>
     
    
     
    </div>
  )
}

export default App
