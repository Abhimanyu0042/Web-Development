import React from 'react'

function SingleNote(props) {
    const noteStyle = {
        padding: '20px',
        borderRadius: '10px',
        border: '2px solid darkblue',
        backgroundColor: 'lightblue'
    }
  return (
    <div style={noteStyle} className='singlenote'>
      <p className="noteText">{props.note}</p>
    </div>
  )
}

export default SingleNote;
