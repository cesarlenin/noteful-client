import React, { Component } from 'react';
import FolderList from '../components/FolderList';
import NoteList from '../components/NoteList';
import UserContext from '../components/UserContext';
import { Link } from 'react-router-dom';
import '../App.css';

export default class FolderPage extends Component {
  static contextType = UserContext;
  render() {
    const { notes } = this.context;
    const folderNoteList = notes.filter(
      (notes) => notes.folderId === this.props.match.params.folderId
    );

    return (
      <main>
        <section className="folderList">
          <FolderList />
        </section>
        <section className="noteList ">
          <NoteList notes={folderNoteList} {...this.props} />
          <Link className="addNoteLink" to={`/AddNote`}>
          <h2>add note</h2>
          </Link>
        </section>
      </main>
    );
  }
}
