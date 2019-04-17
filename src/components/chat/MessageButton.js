import React, { Component } from 'react'

class MessageButton extends Component {
  render() {
  /*document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.fixed-action-btn');
    var instances =M.FloatingActionButton.init(elems, {
      direction: 'left'
    });
  });
  */
  return (

    <div className="fixed-action-btn">
  <a className="btn-floating btn-large pulse pink" href="false">
    <i className="large material-icons">chat</i>
  </a>
  <ul>
    
    <li><a className="btn-floating green" href="false"><i className="material-icons">add_circle_outline</i></a></li>
    <li><a className="btn-floating blue" href="false"><i className="material-icons">drafts</i></a></li>
 
  </ul>
</div>
   
    
  )
 
 }
}
 export default MessageButton