import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { connect } from 'react-redux'
import logo from '../Images/3deyeblue.png'


const Navbar = (props) => {
  const { auth , profile} = props;
  const links = auth.uid ? <SignedInLinks  profile={profile}/> : <SignedOutLinks />;
  return (
    <nav className="nav-wrapper white darken-0">
      <div className="container">
      <Link to='/' className="brand-logo"><div><img id="logo" src={logo} alt="logo"></img></div>  </Link>
      {links}
      </div>
    </nav>
  )
}

const mapStateToProps = (state) => {
  
  return{
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}

export default connect(mapStateToProps)(Navbar)