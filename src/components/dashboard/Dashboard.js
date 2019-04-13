//class based component 
import React, {Component} from "react";
import GlassesList from '../Glasses/GlassesList'
import {connect } from 'react-redux'
import {firestoreConnect } from 'react-redux-firebase'
import {compose } from 'redux'
class Dashboard extends Component{
    render(){
        //console.log(this.props);
        const {glasses}= this.props

        return (
            <div className="dashboard container">
                <div className="row"> 
                    <div className="col s12 m6"></div>
                    <div className="col s12 m5"></div>
                    <div className="col s12 m5 offset-m1">
                        <GlassesList glasses={glasses} />
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state)=> {
//console.log(state)   
 return {
        glasses: state.firestore.ordered.glasses
    }
} 
export default compose(
    connect(mapStateToProps),
    firestoreConnect([
      { collection: 'glasses' }
    ])
  )(Dashboard)
