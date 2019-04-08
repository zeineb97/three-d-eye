import React from 'react'

const GlassesSummary = (glass) => {
  return (
    <div className="card z-depth-0 project-summary">
        <div className="card-content grey-text text-darken-3" > 
            <span className="card-title">{glass.name}</span>
            <p>Brand</p>
            <p className="grey-text">date</p>
        </div>
    </div>
  )
}

export default GlassesSummary