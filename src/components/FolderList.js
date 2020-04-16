import React, { Component } from 'react'
import Folder from './Folder'
import UserContext from './UserContext'
import {Link} from 'react-router-dom';
import './FolderList.css'

export default class FolderList extends Component {

  static contextType = UserContext;
  render() {
    const {folders} = this.context;
     const foldersList = folders.map(folder => {

      return <Folder key={folder.id} id={folder.id} name={folder.name}/>
    })
    

    return (
      <div>
        {foldersList}
        <Link  className="addFolderButton" to= {`/AddFolder`}><h2>add folder</h2></Link>
        {/* add css styling to button */}
      </div>
    )
  }
}


