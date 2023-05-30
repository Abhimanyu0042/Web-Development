import React from 'react'

export default function BUtton(props) {
    const buttonstyle = {
        backgroundColor: 'pink',
        padding:'15px',
        border: '3px solid black '
    }
  return (
    <div>
        <button className='Button1' style={buttonstyle}>{props.typr}</button>
    </div>
  )
}

