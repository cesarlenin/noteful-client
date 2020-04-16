import React, { Component } from 'react';
import AddNote from '../components/AddNote';

export default class AddNotePage extends React.Component {
  render() {
    return (
      <main>
        <section className="addNote">
          <AddNote {...this.props} />
        </section>
      </main>
    );
  }
}
