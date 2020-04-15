import React, { Component } from 'react'
import Folder from './Folder'
import UserContext from './UserContext'

export default class FolderList extends Component {

  static contextType = UserContext;
  render() {
    const {folders} = this.context;
     const foldersList = folders.map(folder => {

      return <Folder id={folder.id} name={folder.name}/>
    })
    

    return (
      <div>
        {foldersList}
        <button>add folder</button>
      </div>
    )
  }
}


