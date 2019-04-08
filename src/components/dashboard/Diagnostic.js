import React, { Component } from 'react'

class Diagnostic extends Component {
  state = {
    email: '',
    password: ''
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
    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Diagnostic</h5>
          <h7 className="grey-text text-darken-3">Lifestyle</h7>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id='email' onChange={this.handleChange} />
          </div>
        
          <h7 className="grey-text text-darken-3">Correction indicated on the prescription</h7>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id='email' onChange={this.handleChange} />
          </div>
          
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Send</button>
          </div>
        </form>
      </div>
    )
  }
}

export default Diagnostic
