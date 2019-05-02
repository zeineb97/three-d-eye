import React, { Component } from 'react'

class MessageButton extends Component {
  handleClick =()=> {
    window.open('./messages')
  }
  render() {
  
  return (

    <div className="fixed-action-btn">
  <button className="btn-floating btn-large pulse pink" onClick={this.handleClick} >
     
    <i className="large material-icons">chat</i>

  </button>
  
</div>
   
    
  )
 
 }
}
 export default MessageButton