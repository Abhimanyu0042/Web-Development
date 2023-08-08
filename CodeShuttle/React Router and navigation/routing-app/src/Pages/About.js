import React from 'react'
import { useLocation } from 'react-router-dom'

function About() {

  const location = useLocation();
  const data = location.state; //state is used to get the data from the link

  console.log(data);

  return (
    <div>
      About
    </div>
  )
}

export default About
      

