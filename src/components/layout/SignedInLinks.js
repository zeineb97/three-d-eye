import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'
const SignedInLinks = (props) => {
  return (
    <div>
      <ul className="right">
        <li><NavLink to='/diagnostic'>New Diagnodtic</NavLink></li>
        <li><NavLink to='/addglasses'>Add Glasses</NavLink></li>
        <li><a  onClick={props.signOut}>Log Out</a></li>
        
        <li>
          <NavLink to='/' className="btn btn-floating pink lighten-2">
          <i className="large material-icons"> account_box </i>
          </NavLink>
        </li>
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