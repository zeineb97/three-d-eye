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
        <div>{moment(glass.createdAt.toDate()).calendar()}</div>
      </div>
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