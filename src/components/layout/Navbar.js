import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import logo from '../Images/logo.png'
const logoStyle = {
  height: '0.5px',
  width: '0.5px'
};

const Navbar = () => {
  return (
    <nav className="nav-wrapper grey darken-0">
      <div className="container">
      <Link to='/' className="brand-logo"><div  ><img src={logo} alt="logo"style={logoStyle}></img></div>  </Link>
        <SignedInLinks />
        <SignedOutLinks />
      </div>
    </nav>
  )
}

export default Navbar