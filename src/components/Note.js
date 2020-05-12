import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../components/UserContext';
import PropTypes from 'prop-types';
import './Note.css';

export default class Note extends Component {
  static contextType = UserContext;
  render() {
    const modified = new Date(this.props.modified);
    return (
      <div key={this.props.id} className="note">
        <Link to={`/Notes/${this.props.id}`}>
          <h2>{this.props.name}</h2>
        </Link>
        <p>
          modified on:{modified.getDate()}/{modified.getMonth()}/
          {modified.getFullYear()}
        </p>
        <button
          onClick={() => {
            this.context.onDelete(this.props.id);
            this.props.history.push('/');
          }}
        >
          Delete Note
        </button>
        {/*add call back handleDelete */}
      </div>
    );
  }
}
Note.propTypes = {
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      folderId: PropTypes.number.isRequired,
      modified: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ),
};
