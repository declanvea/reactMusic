//In your PlayListForm component you should have a addToList function that happens
//when the form is submitted.
//This expression or method (depending on the syntax you choose) will be comparable to this:

import React from 'react';

class PlayListForm extends React.Component {
  state = {
    userName: '',
    songNotes: '',
    songArtist: '',
    songTitle: ''
  }

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
        <form>
        <div className="col-6">
            <div className="form-group">
              <label for="exampleFormControlInput1">User Name:</label>
              <input type="text" classNameName="form-control" id="exampleFormControlInput1" placeholder="Name or User Name"/>
            </div>
            <div className="form-group">
              <label for="exampleFormControlInput1">Artist/Band:</label>
              <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Artist or Band Name"/>
            </div>
            <div className="form-group">
              <label for="exampleFormControlInput1">Song Title:</label>
              <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Song Title"/>
            </div>
            <div className="form-group">
              <label for="exampleFormControlTextarea1">Notes about Song:</label>
              <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default PlayListForm;
