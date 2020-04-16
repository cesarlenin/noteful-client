import React, { Component } from 'react';
import ValidationError from './ValidationError';
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

 

  render() {
    const nameError = this.validateName();
    const contentError = this.validateContent();

    const optionHtml=this.context.folders.map((folder)=>{
      return<option key={folder.id} value={folder.name}>{folder.name}</option>
     })

    return (
      <form
        onSubmit={() => {
          this.context.onAddFolder(this.state.name.value);
          this.props.history.push('/');
        }}
      >
        <h3>Create a folder</h3>
        <label htmlFor="nameNote">Name:</label>
        <input
          type="text"
          id="nameNote"
          name="nameNote"
          onChange={(e) => this.updateName(e.target.value)}
        />
        {this.state.name.touched && <ValidationError message={nameError} />}
        <input
          type="text"
          id="contentNote"
          name="contentNote"
          onChange={(e) => this.updateContent(e.target.value)}
        />
        {this.state.content.touched && (
          <ValidationError message={contentError} />
        )}
        <select>
          {optionHtml}
        </select>

        <button
          type="submit"
          value="Submit"
          disabled={this.validateName() || this.validateContent()}
        >
          Add Note
        </button>
      </form>
    );
  }
}
