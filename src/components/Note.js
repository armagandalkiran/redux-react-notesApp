import React from 'react'

const Note = ({title,note,color}) => {
  return (
    <div style={{backgroundColor:color}} className="note-container">
        <h3>{title}</h3>
        <p>{note}</p>
    </div>
  )
}

export default Note;