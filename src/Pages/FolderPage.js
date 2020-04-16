import React, { Component } from 'react'
import FolderList from "../components/FolderList";
import NoteList from '../components/NoteList';
import UserContext from '../components/UserContext'
import '../App.css';

export default class FolderPage extends Component {
  static contextType = UserContext;
  render() {
  const {notes} = this.context;
   const folderNoteList = notes.filter(notes => notes.folderId === this.props.match.params.folderId)

    return (
      <main>
        <section className="folderList">
        <FolderList/>
        </section>
        <section className="noteList ">
        <NoteList 
        notes={folderNoteList}
        />
        </section>
      </main>
    )
  }
}