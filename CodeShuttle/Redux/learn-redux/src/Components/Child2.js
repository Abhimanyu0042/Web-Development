import React from 'react'
import { useSelector } from 'react-redux'

function Child2() {
    const message = useSelector((state) => state.messageReducer.message)
  return (
    <div>
        <br></br>
      The data from Child1 is : {message}
    </div>
  )
}

export default Child2
