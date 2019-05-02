import React from 'react'
import {connect} from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'
import {Redirect} from 'react-router-dom'
import moment from 'moment'
const GlassesDetails = (props) => {
  
  //console.log(props)
  const {glass, auth } = props ; 
  if (!auth.uid) return <Redirect to ='/signin'/>

  if (glass) {
    return (
      <div className="container section project-details">
    <div className="card z-depth-0">
      <div className="card-content">
        <span className="card-title">{glass.name}</span>
        <p>{glass.description}</p>
      </div>
      <div className="card-action grey lighten-4 grey-text">
        <div>{glass.brand}</div>
        <div>{moment( glass.createdAt.toDate()).calendar()}</div>
      </div>
      <img src= 'https://firebasestorage.googleapis.com/v0/b/deye-8cbd2.appspot.com/o/models%2Fpolice.jpg?alt=media&token=be3a7c36-f3b0-48fd-a2a6-fc550219ef47' alt=" Police model" />
      <img src= 'https://firebasestorage.googleapis.com/v0/b/deye-8cbd2.appspot.com/o/models%2FVazrobe-Vintage-Small-Round-Eyeglasses-Frame-Men-Women-Decorative-Eye-Glasses-Frames-for-Man-Optical-Oval.jpg_640x640.jpg?alt=media&token=a9ca33d1-0d66-4e39-baac-c48c12218df0' alt=" Police model" />
      <img src= 'https://firebasestorage.googleapis.com/v0/b/deye-8cbd2.appspot.com/o/models%2Ft%C3%A9l%C3%A9chargement.jpg?alt=media&token=e56d534a-b07c-4685-9279-b9739d906519' alt=" Police model" />
     
  
    </div>
  </div>

    )
        
  } else 
  {
    return (
        <div className="container center">
          <p> Add Catalogue .... </p>
        </div>
      )
  }
 
}

const mapStateToProps= (state, ownProps) => {
   // console.log(state)
    const id = ownProps.match.params.id
    const glasses = state.firestore.data.glasses
    const glass =glasses ?  glasses[id] : null
  return {
    glass : glass, 
    auth: state.firebase.auth
  }
}
export default compose(
  connect(mapStateToProps),
  firestoreConnect ([
    {collection : 'glasses'}
  ])
) (GlassesDetails)