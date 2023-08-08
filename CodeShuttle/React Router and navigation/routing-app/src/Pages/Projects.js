import React from 'react'
import { useParams } from 'react-router-dom'

function Projects() {
    const parameters = useParams();
  return (
    <div>
      <h1>Project is having Id of {`${parameters.projectId}`}</h1>
    </div>
  )
}

export default Projects
