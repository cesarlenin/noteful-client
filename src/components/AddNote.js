import React, { Component } from 'react';
import ValidationError from './ValidationError';
import PropTypes from 'prop-types';
import UserContext from '../components/UserContext';

export default class AddNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: {
        value: '',
        touched: false,
      },
      content: {
        value: '',
        touched: false,
      },
      selected: {
        value: '',
        touched: false,
      },
    };
  }

  static contextType = UserContext;

  validateName() {
    const name = this.state.name.value.trim();
    if (name.length === 0) {
      return 'Name is required';
    } else if (name.length < 3) {
      return 'Name must be at least 3 characters long';
    }
  }
  updateName(name) {
    this.setState({ name: { value: name, touched: true } });
  }

  validateContent() {
    const content = this.state.content.value.trim();
    if (content.length === 0) {
      return 'Content is required';
    } else if (content.length < 3) {
      return 'Content must be at least 3 characters long';
    }
  }
  updateContent(content) {
    this.setState({ content: { value: content, touched: true } });
  }

  validateSelected() {
    if (this.state.selected.touched === false) {
      return 'Selecting a folder is required';
    }
  }
  updateSelected(selected) {
    this.setState({ selected: selected, touched: true });
  }

  render() {
    const nameError = this.validateName();
    const contentError = this.validateContent();
    const selectedError = this.validateSelected();

    const optionHtml = this.context.folders.map((folder) => {
      return (
        <option key={folder.id} value={folder.id}>
          {folder.name}
        </option>
      );
    });

    return (
      <form
        onSubmit={() => {
          this.context.onAddNote(
            this.state.name.value,
            this.state.content.value,
            this.state.selected
          ); //add seleted option
          this.props.history.push('/');
        }}
      >
        <h3>Create a note</h3>
        <label htmlFor="nameNote">Name:</label>
        <input
          type="text"
          id="nameNote"
          name="nameNote"
          onChange={(e) => this.updateName(e.target.value)}
        /><br/>
        {this.state.name.touched && <ValidationError message={nameError} />}
        <label htmlFor="contentNote">Content:</label>
        <input
          type="text"
          id="contentNote"
          name="contentNote"
          onChange={(e) => this.updateContent(e.target.value)}
        /><br/>
        {this.state.content.touched && (
          <ValidationError message={contentError} />
        )}
        <label>Folder:</label>
        <select
          value={this.state.selected}
          onChange={(e) => this.updateSelected(e.target.value)}
        >
          <option value="disabled" hidden>
            select folder
          </option>
          {optionHtml}
        </select><br/>
        {this.state.selected.touched && (
          <ValidationError message={selectedError} />
        )}

        <button
          type="submit"
          value="Submit"
          disabled={
            this.validateName() ||
            this.validateContent() ||
            this.validateSelected()
          }
        >
          Add Note
        </button>
      </form>
    );
  }
}
AddNote.propTypes = {
  folders: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
};
