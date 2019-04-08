import React from 'react'
import GlassesSummary from './GlassesSummary'

const GlassesList = ({glasses}) => {
    return (
        <div className="project-list section">
           {
               glasses && glasses.map(glass => {
                   return (
                       <GlassesSummary glass={glass} key={glass.id}/>
                   )
               })
           }

         </div>
    )
}
export default GlassesList