import React, { Component } from 'react';
import FolderList from '../components/FolderList';
import NoteList from '../components/NoteList';
import UserContext from '../components/UserContext';
import '../App.css';

export default class MainPage extends Component {
  static contextType = UserContext;
  render() {
    return (
      <main>
        <section className="folderList">
          <FolderList />
        </section>
        <section className="noteList ">
          <NoteList notes={this.context.notes} {...this.props} />
        </section>
      </main>
    );
  }
}
