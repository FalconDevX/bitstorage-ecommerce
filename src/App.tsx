import './App.css'
import Home from './Home/Home.tsx'
import Login from './Login/Login.tsx'
import Register from './Reigster/Register.tsx'
import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </div>
  )
}

export default App
