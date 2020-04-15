import React, { Component } from 'react'
import FolderList from "../components/FolderList";
import NoteList from '../components/NoteList';
import '../App.css';

export default class FolderPage extends Component {
  render() {

   const folderNoteList = this.props.notes.filter(notes => notes.folderId === this.props.match.params.folderId)

    return (
      <main>
        <section className="folderList">
        <FolderList 
        folders={this.props.folders}
        />
        </section>
        <section className="noteList ">
        <NoteList 
        notes={folderNoteList}
        />
        <button>Add notes</button>
        </section>
      </main>
    )
  }
}