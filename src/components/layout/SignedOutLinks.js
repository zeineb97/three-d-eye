import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedOutLinks = () => {
  return (
    <div>
      <ul className="right">
      
      <li><NavLink to='/signup' id="nav_link">SignUp</NavLink></li>
      <li><NavLink to='/signin'id="nav_link">Login</NavLink></li>
        
      </ul>
    </div>
  )
}

export default SignedOutLinks