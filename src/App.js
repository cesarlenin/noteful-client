import React, { Component } from 'react';
import NotFound from './Pages/NotFound';
import MainPage from './Pages/MainPage';
import FolderPage from './Pages/FolderPage';
import NotePage from './Pages/NotePage';
import UserContext from './components/UserContext';
import {Route, Switch, Link} from 'react-router-dom';
import STORE from './dummy-store';



export default class App extends Component {

  state = {
    folders: STORE.folders,
    notes: STORE.notes,
  }

  //fetch for /folders and notes
  componentDidMount(){
  fetch('http://localhost:9090/folders')
    .then(response => response.json())
    .then(data => this.setState({
      folders: data.folders
    }))
  fetch('http://localhost:9090/notes')
    .then(response => response.json())
    .then(data => this.setState({
      notes: data.notes
  }))
  }

  //delete function

  render() {
    return (
      <UserContext.Provider value={{
        folders: this.state.folders,
        notes: this.state.notes
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
          <Route component={NotFound} />
        </Switch>

    </div>
    </UserContext.Provider>
    )
  }
}


