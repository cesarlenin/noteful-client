import React, { Component } from 'react';
import NotFound from './Pages/NotFound';
import MainPage from './Pages/MainPage';
import FolderPage from './Pages/FolderPage';
import NotePage from './Pages/NotePage';
import AddFolderPage from './Pages/AddFolderPage';
import UserContext from './components/UserContext';
import AddNotePage from './Pages/AddNotePage';
import { Route, Switch, Link } from 'react-router-dom';
import ErrorPage from './Pages/ErrorPage';
import config from './config';
// import cuid from 'cuid';

export default class App extends Component {
  state = {
    folders: [],
    notes: [],
  };

  //fetch for /folders and notes

  componentDidMount() {
    fetch(config.API_ENDPOINT+ 'folders', {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${config.API_KEY}`
      }
    })
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          folders: data,
        })
      );
    fetch(config.API_ENDPOINT+ 'notes', {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${config.API_KEY}`
      }
    })
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          notes: data,
        })
      );
  }

  //delete function
  handleDelete = (id) => {
    console.log(id);
    fetch(config.API_ENDPOINT+ `notes/${id}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${config.API_KEY}`
      }
    })
    .then((data) => {
      if (data.ok) {
        this.setState({
          notes: this.state.notes.filter((val) => val.id !== id),
        });
      }
    });
  };

  handleAddFolder = (name) => {
    const newItem = JSON.stringify({ name });
    fetch(config.API_ENDPOINT+ 'folders', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${config.API_KEY}`
      },
      body: newItem
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((data) => {
        this.setState({ folders: [...this.state.folders, data] });
      });
  };

  handleAddNote = (name, content, folderId) => {
    const modified = new Date().toISOString();

    const newItem = JSON.stringify({ name, content, folderId, modified });
    fetch(config.API_ENDPOINT+ 'notes', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${config.API_KEY}`
      },
      body: newItem
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((data) => {
        this.setState({ notes: [...this.state.notes, data] });
      });
  };

  render() {
    return (
      <UserContext.Provider
        value={{
          folders: this.state.folders,
          notes: this.state.notes,
          onDelete: this.handleDelete,
          onAddFolder: this.handleAddFolder,
          onAddNote: this.handleAddNote,
        }}
      >
        <div>
          <Link to="/">
            <h1>Noteful</h1>
          </Link>
          <ErrorPage>
            <Switch>
              <Route exact path="/" component={MainPage} />
              <Route exact path="/FolderLists/:folderId" component={FolderPage}/>
              <Route exact path="/Notes/:noteId" component={NotePage} />
              <Route exact path="/AddFolder" component={AddFolderPage} />
              <Route exact path="/AddNote" component={AddNotePage} />
              <Route component={NotFound} />
            </Switch>
          </ErrorPage>
        </div>
      </UserContext.Provider>
    );
  }
}
