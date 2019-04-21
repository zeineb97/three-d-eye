import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'
import {connect } from 'react-redux'
class SignUp extends Component {
  state = {
    email: '',
    password: '',
    fullName: '',
    adress: '',
    dateOfBirth:'',
    phone:''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  }
  render() {
    const {  auth } = this.props;
    if (auth.uid) return <Redirect to ='/'/>
    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h3 className="grey-text text-darken-3">Sign Up</h3>
        <div className="row">
          <div className="input-field"> 
          <i className="material-icons prefix">email</i>
            <label htmlFor="email">Email</label>
            <input type="email" id='email' onChange={this.handleChange} />
          </div>
          <div className="input-field">
          <i className="material-icons prefix">edit</i>
            <label htmlFor="password">Password</label>
            <input type="password" id='password' onChange={this.handleChange} />
          </div>
          <div className="input-field">
          <i className="material-icons prefix">account_circle</i>
            <label htmlFor="fullName">Full Name</label>
            <input type="text" id='fullName' onChange={this.handleChange} />
          </div>
          
          <div className="input-field">
          <i className="material-icons prefix">edit_location</i>
            <label htmlFor="adress">Address</label>
            <input type="text" id='adress' onChange={this.handleChange} />
          </div>
          <div className="input-field">
          <i className="material-icons prefix">local_phone</i>
            <label htmlFor="phone">Phone Number</label>
            <input type="text" id='phone' onChange={this.handleChange} />
          </div>
          <div >
          <i className="material-icons prefix">date_range</i>
            <label htmlFor="dateOfBirth">Date Of Birth</label>
            <input type="date" id='dateOfBirth' onChange={this.handleChange} />
          </div>
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Sign Up</button>
          </div>
          <div className="preloader-wrapper big active">
  
  </div>
        </form>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return{
    auth: state.firebase.auth
  }
}

export default connect(mapStateToProps)(SignUp)