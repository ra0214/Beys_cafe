import React from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Ubicacion from './pages/Ubicacion'
import Menu from './pages/Menu'
import SecondMenu from './pages/SecondMenu'
import './App.css'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/ubicacion" element={<Ubicacion/>}/>
        <Route path="/menu" element={<Menu/>}/>
        <Route path="/second-menu" element={<SecondMenu />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />}/>
      </Routes>
    </Router>
  )
}

export default App
