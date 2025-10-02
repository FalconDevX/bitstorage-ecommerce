import './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header'>
      <h1 className='header-title'>Bitstorage</h1>
      <Link to="/login">
       <button className='header-login-button'>Login</button>
   
      </Link>
    </div>
  )
}

export default Header