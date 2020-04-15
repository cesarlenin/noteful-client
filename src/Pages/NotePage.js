import React, { Component } from 'react';
import NoteList from '../components/NoteList';
import '../App.css';

export default class NotePage extends Component {
  render() {

    

    const shownNote = this.props.notes.find(note => note.id === this.props.match.params.noteId);

    const shownFolder = this.props.folders.find(folder => folder.id === shownNote.folderId);
    
    console.log(shownNote);
    
     return (
       <main>
         <section className="folderList">
         <button onClick={() => this.props.history.goBack()}><h2>BACK</h2></button>
         <h2>{shownFolder.name}</h2>
         </section>
         <section className="noteList">
         <NoteList 
         notes={[shownNote]}
         />
         <p>{shownNote.content}</p>
         </section>
       </main>
     )
   }
 }