import React, { Component } from 'react'
import ValidationError from './ValidationError';

export default class FolderList extends Component {

  constructor(props) {
    super(props);
    this.state = {
        name: {
          value: '',
          touched: false
        }
      };
  }

  validateName() {
    const name = this.state.name.value.trim();
        if (name.length === 0) {
          return 'Name is required';
        } else if (name.length < 3) {
          return 'Name must be at least 3 characters long';
        }
  }

  updateName(name) {
    this.setState({name: {value: name, touched: true}});
  }

  render() {
    const nameError = this.validateName();
    
    return (
        <form>
          <h3>Create a folder</h3>
          <label for="nameFolder">Name:</label>
          <input type="text"  id="nameFolder" name="nameFolder" onChange={e => this.updateName(e.target.value)}/>
          {this.state.name.touched && (
           <ValidationError message={nameError} />
           )}
          <button type="submit" value="Submit">Add folder</button>
        </form>
    )
  }
}
