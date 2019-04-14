import React from 'react'

const GlassesSummary = (glasses) => {
  return (
    <div className="card z-depth-0 project-summary">
        <div className="card-content grey-text text-darken-3" > 
            <span className="card-title"> {glasses.glass.name}</span>
            <p>{glasses.glass.brand}</p>
            <p className="grey-text">{glasses.glass.date}</p>
        </div>
    </div>
  )
}

export default GlassesSummary