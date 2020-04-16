import React, { Component } from 'react'

export default class FolderList extends Component {

  render() {

    return (
        <form>
          <h3>Create a folder</h3>
          <label for="nameFolder">Name:</label>
          <input type="text"  id="nameFolder"/>
          <button type="submit" value="Submit">Add folder</button>
        </form>
    )
  }
}
