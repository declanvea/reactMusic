import React from 'react';


class PlayListItem extends React.Component {
  render() {
    return (
      <div>
        <div style={{margin:'5px', backgroundColor:'#1E90FF', color:'white'}} className="card w-50">
          <div className="card-body">
            <p className="card-text">User: {this.props.userName}</p>
            <p className="card-text">Artist/Band: {this.props.songArtist}</p>
            <p className="card-text">Title: {this.props.songTitle}</p>
            <p className="card-text">Notes: {this.props.songNotes}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default PlayListItem;
