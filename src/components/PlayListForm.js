//In your PlayListForm component you should have a addToList function that happens
//when the form is submitted.
//This expression or method (depending on the syntax you choose) will be comparable to this:

import React from 'react';
import {Button} from 'reactstrap';

class PlayListForm extends React.Component {
  state = {
    userName: '',
    songNotes: '',
    songArtist: '',
    songTitle: ''
  }

  addToList = (e) => {
      e.preventDefault();
      let listItem = JSON.stringify(this.state);

      fetch("https://tiny-lasagna-server.herokuapp.com/collections/playlisting", {
        method: "POST",
        body: listItem,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
          }
      }).then(response => {
        console.log(response, "yay");

      }).catch(err => {
        console.log(err, "boo!");
      });
    this.setState({userName: '', songNotes: '', songArtist: '', songTitle:''});
  }

  handleUserName = (e) => this.setState({userName: e.target.value});
  handlesongNotes = (e) => this.setState({songNotes: e.target.value});
  handleSongArtist = (e) => this.setState({songArtist: e.target.value});
  handleSongTitle = (e) => this.setState({songTitle: e.target.value});

  render() {
    const formStyle = {
      margin: '5px',
    }
    return (
      <div>
        <form>
        <div style={formStyle}>
            <div className="form-group">
              <label for="exampleFormControlInput1">Username:</label>
              <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Artist or Band Name" onChange={this.handleUserName} value={this.state.userName}/>
            </div>
            <div className="form-group">
              <label for="exampleFormControlInput1">Artist/Band:</label>
              <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Artist or Band Name" onChange={this.handleSongArtist} value={this.state.songArtist}/>
            </div>
            <div className="form-group">
              <label for="exampleFormControlInput1">Song Title:</label>
              <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Song Title" onChange={this.handleSongTitle} value={this.state.songTitle}/>
            </div>
            <div className="form-group">
              <label for="exampleFormControlTextarea1">Notes about Song:</label>
              <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" onChange={this.handlesongNotes} value={this.state.songNotes}></textarea>
            </div>
            <Button color="primary" type="submit" class="btn btn-primary" onClick={this.addToList}>Submit</Button>
          </div>
        </form>
      </div>
    );
  }
}

export default PlayListForm;
