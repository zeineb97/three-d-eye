import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'
import { connect } from 'react-redux';
import { addMessage } from '../../store/actions/messageAction'
class MessageWindow extends Component {
    state = {
        message:''
      }
      handleChange = (e) => {
        this.setState({
          [e.target.id]: e.target.value
        })
      }
      handleSubmit = (e) => {
        e.preventDefault();
        this.props.addMessage(this.state);
        this.props.history.push('/');
      }
      render() {
        const { auth}= this.props;
        if (!auth.uid) return <Redirect to ='/signin'/>
        return (
            <div className="container">
            <form className="white" onSubmit={this.handleSubmit}>
              <h3 className="grey-text text-darken-3">Messages</h3>
            <div className="row">
           <div className="input-field col s12">
           <i className="material-icons prefix"> keyboard_arrow_right</i>
            <input type="text"  id="message" className="materialize-textarea"></input>
            <label htmlFor="message">Write your message here</label>
         </div>
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
      addMessage: (message) => dispatch(addMessage(message))
    }
  }
   
  
  export default connect(mapStateToProps, mapDispatchToProps)(MessageWindow)

