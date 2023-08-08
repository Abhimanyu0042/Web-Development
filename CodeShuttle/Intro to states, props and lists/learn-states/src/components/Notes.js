import React, { useState } from 'react'
import SingleNote from './singleNote.js';

function Notes() {
    const [notes, setNotes] = useState([]);
    const [curNote, setCurNote] = useState('');

    function updateCurNotes(event) {
        setCurNote(event.target.value)
    }

    function addNote(event) {
        const newNotesArray = [...notes, curNote];
        setNotes(newNotesArray)
    }

    const ulStyle = {
        listStyle: 'none',
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)' ,
        gap:'30px',
        margin: '40px'
    }

    const notesIPbar = {
        display: 'flex',
        gap: '20px',
        marginTop: '50px',
        alignItems: 'center',
        justifyContent: 'center'
    }

  return (
    <>
    <div style={notesIPbar}>
      <input onChange={updateCurNotes} type='text'/>
      <button onClick={addNote}>submit</button></div>
      <ul style={ulStyle}>
        {notes.map((note,index) => {
            return <li key={index}><SingleNote note={note}/> </li>
        })}
      </ul>
    </>
  );
}

export default Notes
