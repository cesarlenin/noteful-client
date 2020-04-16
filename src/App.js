import React, { Component } from 'react';
import NotFound from './Pages/NotFound';
import MainPage from './Pages/MainPage';
import FolderPage from './Pages/FolderPage';
import NotePage from './Pages/NotePage';
import AddFolderPage from './Pages/AddFolderPage';
import UserContext from './components/UserContext';
import {Route, Switch, Link} from 'react-router-dom';



export default class App extends Component {

  state = {
    folders: [],
    notes: []
  }

  //fetch for /folders and notes
  componentDidMount(){
  fetch('http://localhost:9090/folders')
    .then(response => response.json())
    .then(data => this.setState(
      {
        folders: data
      }
    ))
  fetch('http://localhost:9090/notes')
    .then(response => response.json())
    .then(data => this.setState(
      {
        notes: data
      }
      ))
  }

  //delete function
  handleDelete = (id) => {
    console.log(id)
    fetch(`http://localhost:9090/notes/${id}`, {
       method: 'DELETE',
       headers: {
         'content-type': 'application/json'
    }
    
    })
    .then(data => {
      if (data.ok) { 
        this.setState({
          notes: this.state.notes.filter(val => val.id !== id )
        })
    }})
}

  handleAddFolder = (name) => {
    console.log(name)
    fetch(`http://localhost:9090/folders/${name}`, {
       method: 'POST',
       headers: {
         'content-type': 'application/json'
    }
    
    })
    .then(data => {
      console.log('ran')
      console.log(data)
      if (data.ok) { 
        console.log(data)
        this.setState({
          folders: this.state.folders
        })
    }
  })
}

  render() {
    return (
      <UserContext.Provider value={{
        folders: this.state.folders,
        notes: this.state.notes,
        onDelete: this.handleDelete,
        onAddFolder:this.handleAddFolder
    }}>
      <div>
        <Link to="/"><h1>Noteful</h1></Link>
        <Switch>
          <Route exact path='/' 
          component={MainPage}
            />
            <Route exact path='/FolderLists/:folderId' 
            component={FolderPage}
             />
             <Route exact path='/Notes/:noteId' 
              component={NotePage}
              />

            <Route exact path='/AddFolder' 
              component={AddFolderPage}
            />

          <Route component={NotFound} />
        </Switch>

    </div>
    </UserContext.Provider>
    )
  }
}


