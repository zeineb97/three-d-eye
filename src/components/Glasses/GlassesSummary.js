import React from 'react'
import moment from 'moment'
const GlassesSummary = (glasses) => {
  return (
    <div className="card z-depth-0 project-summary">
        <div className="card-content grey-text text-darken-3" > 
            <span className="card-title"> {glasses.glass.name}</span>
            <p id="name">{glasses.glass.brand}</p>
            <p id="date">{moment(glasses.glass.createdAt.toDate()).calendar()}</p>
        </div>
    </div>
  )
}

export default GlassesSummary