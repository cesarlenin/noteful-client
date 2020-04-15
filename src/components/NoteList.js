import React, { Component } from 'react';
import Note from './Note';


export default class NoteList extends Component {

  render() {

    const notesList = this.props.notes.map(note => {

      return (<Note 
      id={note.id} 
      name={note.name} 
      modified={note.modified}
      folderID={note.folderID}
      content={note.content}/>
      )
    })

    return (
      <div className="notesList">
        {notesList}
      </div>
    )
  }
}


