import React from 'react';

export default class ErrorPage extends React.Component {
  state = { error: null };
  static getDerivedStateFromError(error) {
    console.log(error);
    return { error };
  }
  render() {
    if (this.state.error) {
      return (
        <main className="errorPage">
          <h1>Oops.... we got some wires crossed back here!!</h1>
          <p>Please go back or refresh</p>
        </main>
      );
    }
    return this.props.children;
  }
}
