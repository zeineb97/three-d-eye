import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'
const SignedInLinks = (props) => {
  return (
    <div>
      <ul className="right">
        <li ><NavLink to='/diagnostic' id="nav_link">New Diagnodtic</NavLink></li>
        <li ><NavLink to='/addglasses' id="nav_link">Add Glasses</NavLink></li>
        <li><button className="btn-flat white"  onClick={props.signOut} id="nav_link_btn">Log Out</button></li>
        
        <li><NavLink to='/' className="btn btn-floating pink lighten-1" id="initials">
          {props.profile.initials}
        </NavLink></li>
      </ul>
   
    </div>
    
  )
}
const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(null, mapDispatchToProps)(SignedInLinks)