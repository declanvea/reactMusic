//In your PlayListForm component you should have a addToList function that happens
//when the form is submitted.
//This expression or method (depending on the syntax you choose) will be comparable to this:

import React from 'react';
import logo from './logo.svg';
import './App.css';

class PlayListForm extends React.Component {

  addToList = (e) => {
      e.preventDefault();
      this.setState({userName: e.target.value, songTitle: e.target.value, songArtist: e.target.value, songNotes: e.target.value});
      let listItem = JSON.stringify(this.state);

      fetch("https://tiny-lasagna-server.herokuapp.com/collections/playlisting", {
        method: "POST",
        body: listItem,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      }
    }
    ).then(response => {
      console.log(response, "yay");

    }).catch(err => {
      console.log(err, "boo!");
    });
    this.setState({userName: '', songNotes: '', songArtist: '', songTitle:''});
  }

  render() {
    return (
      <div>
      </div>
    );
  }
}

export default App;
