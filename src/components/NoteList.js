import React, { Component } from 'react';
import Note from './Note';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class NoteList extends Component {
  render() {
    const notesList = this.props.notes.map((note) => {
      return (
        <Note
          key={note.id}
          id={note.id}
          name={note.name}
          modified={note.modified}
          folderID={note.folderID}
          content={note.content}
          {...this.props}
        />
      );
    });

    return (
      <div className="notesList">
        {notesList}
        <Link className="addNote" to={`/AddNote`}>
          <h2>add note</h2>
        </Link>
      </div>
    );
  }
}
NoteList.propTypes = {
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      folderId: PropTypes.string.isRequired,
      modified: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ),
};
