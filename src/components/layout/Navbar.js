import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { connect } from 'react-redux'
import logo from '../Images/logo.png'
const logoStyle = {
  height: '0.5px',
  width: '0.5px'
};

const Navbar = (props) => {
  const { auth , profile} = props;
  const links = auth.uid ? <SignedInLinks  profile={profile}/> : <SignedOutLinks />;
  return (
    <nav className="nav-wrapper grey darken-0">
      <div className="container">
      <Link to='/' className="brand-logo"><div  ><img src={logo} alt="logo"style={logoStyle}></img></div>  </Link>
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