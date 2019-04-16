import React, { Component } from 'react'

class Diagnostic extends Component {
  state = {
    email: '',
    profession: '',
    mobile_hours:'',
    laptop_hours:'',
    age:''
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
          <h3 className="grey-text text-darken-3">Diagnostic</h3>
          <h5 className="grey-text text-darken-3">Correction indicated on the prescription</h5>
          <div className="input-field">
            <label htmlFor="text">We need to ask a specialist</label>
            <input type="email" id='email' onChange={this.handleChange} />
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
         
          <div >
          <h7 className="grey-text text-darken-3">How many hours do yoy spend on your mobile ? <br/></h7>
          <label>
            
            <input type="checkbox" id='mobile_hours' />
            <span>Between 1 and 2 hours per day</span> <br/>
            <input type="checkbox" />
            <span>Between 2 and 4 hours per day</span> <br/>
            <input type="checkbox" />
            <span>Between 4 and 6 hours per day</span> <br/>
            <input type="checkbox" />
            <span>More</span>
          </label>
         </div> 

         <div >
          <h7 className="grey-text text-darken-3">How many hours do yoy spend on your laptop ? <br/></h7>
          <label>
            
            <input type="checkbox" id='laptop_hours' />
            <span>Between 1 and 2 hours per day</span> <br/>
            <input type="checkbox" />
            <span>Between 2 and 4 hours per day</span> <br/>
            <input type="checkbox" />
            <span>Between 4 and 6 hours per day</span> <br/>
            <input type="checkbox" />
            <span>More</span>
            <span>More</span>
          </label>
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
