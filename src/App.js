import React from 'react';
import './App.css';
import ReactJWPlayer from 'react-jw-player';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <React.Fragment>
        <div style={{ height: 297, width: 528 }}>
          <ReactJWPlayer
            playerId="live-player"
            file="https://wowzaprod211-i.akamaihd.net/hls/live/859782/f52e9441/playlist.m3u8"
            playerScript='https://cdn.jwplayer.com/libraries/pUQtdZir.js'
          />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
