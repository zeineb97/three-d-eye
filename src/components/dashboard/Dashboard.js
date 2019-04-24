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
        
        const {glasses, auth}= this.props;
        if (!auth.uid) return <Redirect to ='/signin'/>
        return (
            <div className="dashboard container">
                <div className="row"> 
                    <div className="col s12 m5 offset-m1">
                        <GlassesList glasses={glasses} />
                    </div>
                    <div className="col s12 m5 offset-m1">
                         <Notifications />
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state)=> {
 return {
        glasses: state.firestore.ordered.glasses,
        auth: state.firebase.auth 
    }
} 
export default compose(
    connect(mapStateToProps),
    firestoreConnect([
      { collection: 'glasses' }
    ])
  )(Dashboard)
