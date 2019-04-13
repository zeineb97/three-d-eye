import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedInLinks = () => {
  return (
    <div>
      <ul className="right">
        <li><NavLink to='/diagnostic'>New Diagnodtic</NavLink></li>
        <li><NavLink to='/addglasses'>Add Glasses</NavLink></li>
        <li><NavLink to='/'>Log Out</NavLink></li>
        <li>
          <NavLink to='/' className="btn btn-floating pink lighten-1">
          <i className="large material-icons"> account_box </i>
          </NavLink>
        </li>
      </ul>
    </div>
  )
}

export default SignedInLinks