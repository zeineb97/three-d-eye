//class based component 
import React, {Component} from "react";
import GlassesList from '../Glasses/GlassesList'
import {connect } from 'react-redux'
import {firestoreConnect } from 'react-redux-firebase'
import {compose } from 'redux'
import {Redirect} from 'react-router-dom'
import Notifications from './Notifications'
class Dashboard extends Component{
    render(){
        
        const {glasses, auth, notifications }= this.props;
        if (!auth.uid) return <Redirect to ='/signin'/>
        return (
            <div className="dashboard container">
                <div className="row"> 
                    <div className="col s12 m5 offset-m1">
                        <GlassesList glasses={glasses} />
                    </div>
                    <div className="col s12 m5 offset-m1">
                         <Notifications notifications={notifications}/>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state)=> {
 return {
        glasses: state.firestore.ordered.glasses,
        auth: state.firebase.auth,
        notifications: state.firestore.ordered.notifications
    }
} 
export default compose(
    connect(mapStateToProps),
    firestoreConnect([
      { collection: 'glasses' },
      { collection: 'notifications', limit: 3}
    ])
  )(Dashboard)
