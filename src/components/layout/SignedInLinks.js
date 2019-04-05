import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedInLinks = () => {
  return (
    <div>
      <ul className="right">
        <li><NavLink to='/'>New Diagnodtic</NavLink></li>
        <li><NavLink to='/'>Log Out</NavLink></li>
        <li><NavLink to='/' className="btn btn-floating pink lighten-1"><i class="large material-icons">account_box
</i></NavLink></li>
      </ul>
    </div>
  )
}

export default SignedInLinks