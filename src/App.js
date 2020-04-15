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

  render() {
    return (
      <UserContext.Provider value={{
        folders: this.state.folders,
        notes: this.state.notes
    }}>
      <div>
        <Link to="/"><h1>Noteful</h1></Link>
        <Switch>

          <Route exact path='/' render={() =>
             <MainPage/>
            }
          />

          <Route exact path='/FolderLists/:folderId' render={(routerProps) =>
            <FolderPage
              {...routerProps}
              />
            } 
          />

          <Route exact path='/Notes/:noteId' render={(routerProps) =>
            <NotePage
              {...routerProps}
             />
            } 
          />
          <Route component={NotFound} />
        </Switch>

    </div>
    </UserContext.Provider>
    )
  }
}


