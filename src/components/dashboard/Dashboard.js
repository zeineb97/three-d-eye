//class based component 
import React, {Component} from "react";
import Catalogue from './Catalogue'
import {connect } from 'react-redux'


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
                        <Catalogue glasses={glasses} />
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state)=> {
    return {
        glasses: state.glass.glasses
    }
}

export default connect(mapStateToProps)(Dashboard)