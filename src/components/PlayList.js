import React from 'react';
import PlayListItem from './PlayListItem';
import {Button} from 'reactstrap';

class PlayList extends React.Component {
  state = {
    songs: []
  }
  //Inside of a componentDidMount function on the PlayList component
  //You should have the following fetch call to retrieve the playlists
  //from the server. Don't worry as much about how these function for now, as much placing
  //them in the right locations and getting them to work/sync up properly with the component.
  componentDidMount(){
      fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting').then(results => {
            return results.json();
          }).then(data => {
            this.setState({songs: data});
            console.log("state", this.state.songs);
          })
    }

      //Also in your PlayList component you should have a function that manually updates
      //the playlist when a user presses a button. Use the following "fetchData" function
      //to manually update your playlist.

      fetchData = (e) => {
          e.preventDefault();
          fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting').then(results => {
            return results.json();
          }).then(data => {
            this.setState({songs: data});
          })
        }

  render() {
    const listStyle = {
      margin: '5px',
    }
    return (
      <div style={listStyle}>
        <div>
          <Button onClick={this.fetchData} color="success">Update List</Button>
        </div>
          {this.state.songs.map((song, i) =>
            <PlayListItem key={i} {...song}/>
          )}
      </div>
    );
  }
}

export default PlayList;
