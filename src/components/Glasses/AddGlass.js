import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addGlass } from '../../store/actions/glassActions'
import {Redirect} from 'react-router-dom'
class AddGlass extends Component {
  state = {
    brand: '',
    color: '',
    frame:'',
    glasses:'',
    ingredients:'',
    nose:'',
    description:'',
    gender:'',
    price:'',
    type:''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state);
    this.props.addGlass(this.state);
    this.props.history.push('/');
  }
  render() {
    const { auth}= this.props;
    if (!auth.uid) return <Redirect to ='/signin'/>
    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Add a New Glasses</h5>
          <div className="input-field">
            <input type="text" id='brand' onChange={this.handleChange} />
            <label htmlFor="brand">Brand</label>
          </div>
          <div className="input-field">
            <input type="text" id='color' onChange={this.handleChange} />
            <label htmlFor="color">Color</label>
          </div>
          <div className="input-field">
            <input type="text" id='frame' onChange={this.handleChange} />
            <label htmlFor="frame">Frame</label>
          </div>
          <div className="input-field">
            <input type="text" id='glasses' onChange={this.handleChange} />
            <label htmlFor="glasses">Glasses</label>
          </div>
          <div className="input-field">
            <input type="text" id='ingredients' onChange={this.handleChange} />
            <label htmlFor="ingredients">Ingredients</label>
          </div>
          <div className="input-field">
            <input type="text" id='nose' onChange={this.handleChange} />
            <label htmlFor="nose">Nose</label>
          </div>
          <div className="input-field">
            <input type="text" id='description' onChange={this.handleChange} />
            <label htmlFor="description">Why we love it ? </label>
          </div>
          <div className="input-field">
            <input type="text" id='gender' onChange={this.handleChange} />
            <label htmlFor="gender">Gender</label>
          </div>
          <div className="input-field">
            <input type="text" id='price' onChange={this.handleChange} />
            <label htmlFor="price">Price</label>
          </div>
          <div className="input-field">
            <input type="text" id='type' onChange={this.handleChange} />
            <label htmlFor="type">Type</label>
          </div>
          
          <div className="input-field">
            <button className="btn pink lighten-1">Add</button>
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
    addGlass: (glass) => dispatch(addGlass(glass))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddGlass)