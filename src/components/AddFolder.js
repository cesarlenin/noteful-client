import React, { Component } from 'react';
import ValidationError from './ValidationError';
import UserContext from '../components/UserContext';

export default class AddFolder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: {
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

  render() {
    const nameError = this.validateName();

    return (
      <form
        onSubmit={() => {
          this.context.onAddFolder(this.state.name.value);
          this.props.history.push('/');
        }}
      >
        <h3>Create a folder</h3>
        <label htmlFor="nameFolder">Name:</label>
        <input
          type="text"
          id="nameFolder"
          name="nameFolder"
          onChange={(e) => this.updateName(e.target.value)}
        />
        {this.state.name.touched && <ValidationError message={nameError} />}
        <button type="submit" value="Submit" disabled={this.validateName()}>
          Add folder
        </button>
      </form>
    );
  }
}
