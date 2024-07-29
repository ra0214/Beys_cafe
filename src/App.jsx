import React from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Ubicacion from './pages/Ubicacion'
import Menu from './pages/Menu'
import SecondMenu from './pages/SecondMenu'
import './App.css'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import OptionMenu from './pages/OptionMenu'
import SecondOptionMenu from './pages/SecondOptionMenu'
import ThirdOptionMenu from './pages/ThirdOptionMenu'
import FourthOptionMenu from './pages/FourthOptionMenu'
import FifthOptionMenu from './pages/FifthOptionMenu'
import SixthOptionMenu from './pages/SixthOptionMenu'
import Admin from './pages/Admin'
import RegisterProductPage from './pages/RegisterProductPage'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/ubicacion" element={<Ubicacion/>}/>
        <Route path="/menu" element={<Menu/>}/>
        <Route path="/second-menu" element={<SecondMenu />} />
        <Route path='/' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />}/>
        <Route path='/option-menu' element={<OptionMenu/>}/>
        <Route path='/second-option-menu' element={<SecondOptionMenu/>}/>
        <Route path='/third-option-menu' element={<ThirdOptionMenu/>}/>
        <Route path='/fourth-option-menu' element={<FourthOptionMenu/>}/>
        <Route path='/fifth-option-menu' element={<FifthOptionMenu/>}/>
        <Route path='/sixth-option-menu' element={<SixthOptionMenu/>}/>
        <Route path='/admin' element={<Admin/>}/>
        <Route path='/register-product' element={<RegisterProductPage/>}/>
      </Routes>
    </Router>
  )
}

export default App