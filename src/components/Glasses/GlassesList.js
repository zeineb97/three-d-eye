import React from 'react'
import GlassesSummary from './GlassesSummary'
import {Link} from 'react-router-dom'

const GlassesList = ({glasses}) => {
    return (
        
        <div className="project-list section">
             <h1>Glasses</h1>
           {
               glasses && glasses.map(glass => {
                   return (
                       <Link to={"/glasses/"+ glass.id} key ={glass.id}>
                       <GlassesSummary glass={glass}/>
                       </Link>
                   )
               })
           }

         </div>
    )
}
export default GlassesList