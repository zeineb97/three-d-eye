import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'
import { connect } from 'react-redux';
import {addDiagnostic} from '../../store/actions/diagnosticActions'
class Diagnostic extends Component {
  state = {
    gauche:'',
    droit: '',
    age :'',
    profession :'',
    mobile_hours:'',
    laptop_hours:''
    
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state);
    this.props.addDiagnostic(this.state);
    this.props.history.push('/');
  }
  render() {
    const { auth}= this.props;
    if (!auth.uid) return <Redirect to ='/signin'/>
    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h3 className="grey-text text-darken-3">Diagnostic</h3>
          <h5 className="grey-text text-darken-3">Correction indicated on the prescription</h5>
          <div className="input-field">
            <label htmlFor="text">Œil Gauche</label>
            <input type="text" id='gauche' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="text">Œil Droit</label>
            <input type="text" id='droit' onChange={this.handleChange} />
          </div>
        
      <h5 className="grey-text text-darken-3">Lifestyle</h5>
      <div className="input-field">
            <label htmlFor="age">Age</label>
            <input type="text" id='age' onChange={this.handleChange} />
          </div>
         
          <div className="input-field">
            <label htmlFor="profession">Profession</label>
            <input type="text" id='profession' onChange={this.handleChange} />
          </div>
         
          <div className="input-field">
          
          <label htmlFor="mobile_hours">How many hours do you spend on your mobile ?</label>
          <input type="text" id='mobile_hours' onChange={this.handleChange} />
            
          </div> 

          <div className="input-field">
          
          <label htmlFor="laptop_hours">How many hours do you spend on your laptop ?</label>
          <input type="text" id='laptop_hours' onChange={this.handleChange} />
          
          </div> 


          
         <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Send</button>
          </div>
        </form>
      </div>
    )
  }
}
const mapStateToProps = (state)=> {
  return {
         auth: state.firebase.auth 
     }
 } 
const mapDispatchToProps = dispatch => {
  return {
    addDiagnostic: (diagnostic) => dispatch(addDiagnostic(diagnostic))
  }
}
 

export default connect(mapStateToProps, mapDispatchToProps)(Diagnostic) 
