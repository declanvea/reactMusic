import React from 'react';
import logo from '../logo.svg';
import '../styles/App.css';
import NavBar from './navbar';
import PlayList from './playlist';
import PlayListForm from './playlistform';

class App extends React.Component {
  render() {
    return (
      <div style={{backgroundColor: 'gray'}} className="container">
        <NavBar/>
        <div>
          <PlayListForm/>
          <PlayList/>
        </div>
      </div>
    );
  }
}

export default App;
