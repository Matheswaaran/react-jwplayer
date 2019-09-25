import React from 'react';
import './App.css';
import ReactJWPlayer from 'react-jw-player';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playList: [
        {
          file: "https://content.jwplatform.com/manifests/yp34SRmf.m3u8",
          image: "https://1kabswnt2ua3ivl0cuqv2f17-wpengine.netdna-ssl.com/wp-content/uploads/2014/10/Bike-riding.jpg",
        }
      ],
    };
  }

  setupPlayerOnReady = (event) => {
    window.jwplayer('live-player').addButton(
      "./assests/like.png",
      "Like the Video",
      () => {
        console.log("video liked");
      },
      "like-video"
    );
  };

  render() {
    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
        <div style={{ height: 720, width: 1280 }}>
          <ReactJWPlayer
            playerId="live-player"
            onReady={this.setupPlayerOnReady}
            playlist={this.state.playList}
            playerScript="https://cdn.jwplayer.com/libraries/pUQtdZir.js"
          />
        </div>
      </div>
    );
  }
}

export default App;
