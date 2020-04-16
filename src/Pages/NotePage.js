import React, { Component } from 'react';
import NoteList from '../components/NoteList';
import UserContext from '../components/UserContext';
import '../App.css';

export default class NotePage extends Component {
  static contextType = UserContext;
  render() {
    const { folders, notes } = this.context;
    const shownNote = notes.find(
      (note) => note.id === this.props.match.params.noteId
    );
    const shownFolder = folders.find(
      (folder) => folder.id === shownNote.folderId
    );

    return (
      <main>
        <section className="folderList">
          <button onClick={() => this.props.history.goBack()}>
            <h2>BACK</h2>
          </button>
          <h2>{shownFolder.name}</h2>
        </section>
        <section className="noteList">
          <NoteList notes={[shownNote]} {...this.props} />
          <p>{shownNote.content}</p>
        </section>
      </main>
    );
  }
}
