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
    
    <div class="fixed-action-btn">
  <a class="btn-floating btn-large red" href="false">
    <i class="large material-icons">chat</i>
  </a>
  <ul>
    
    <li><a class="btn-floating green" href="false"><i class="material-icons">add_circle_outline</i></a></li>
    <li><a class="btn-floating blue" href="false"><i class="material-icons">drafts</i></a></li>
 
  </ul>
</div>
   
    
  )
 
 }
}
 export default MessageButton