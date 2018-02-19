import * as React from 'react';
import './App.css';
import { Link } from 'react-router';

const officeNotes = require('./office_notes.jpg');

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={officeNotes} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to your personal office notes</h1>
        </header>
        <p className="App-intro">
          Click <Link to="/login">here</Link> to login
        </p>
          <div> {this.props.children} </div>
      </div>
    );
  }
}

export default App;
