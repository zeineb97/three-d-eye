import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedInLinks = () => {
  return (
    <div>
      <ul className="right">
       <li>
         <div class="nav-wrapper">
         <form>
          <div class="input-field">
            <input id="search" type="search" required/>
            <label class="label-icon" for="search"><i class="material-icons">search</i></label>
            <i class="material-icons">close</i>
          </div>
         </form>
        </div>
        </li>
        <li><NavLink to='/diagnostic'>New Diagnodtic</NavLink></li>
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