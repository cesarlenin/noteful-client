import React, { Component } from 'react';
import '../App.css';
import AddFolder from '../components/AddFolder';

export default class AddFolderPage extends Component {
  render() {
    return (
      <main>
        <section className="addFolder">
          <AddFolder {...this.props} />
        </section>
      </main>
    );
  }
}
