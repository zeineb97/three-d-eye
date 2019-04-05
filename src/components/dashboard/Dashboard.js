//class based component 
import React, {Component} from "react";
import Catalogue from './Catalogue'


class Dashboard extends Component{
    render(){
        return (
            <div className="dashboard container">
                <div className="row"> 
                    <div className="col s12 m6"></div>
                    <div className="col s12 m5"></div>
                    <div className="col s12 m5 offset-m1">
                        <Catalogue/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard