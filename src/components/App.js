import React from 'react';
import logo from '../logo.svg';
import '../styles/App.css';
import NavBar from './navbar';
import PlayList from './playlist';
import PlayListForm from './playlistform';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro"></p>
        <PlayListForm className="col-6"/>
        <PlayList className="col-6"/>
      </div>
    );
  }
}

export default App;
