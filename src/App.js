import React from 'react';
import './App.css';
import ReactJWPlayer from 'react-jw-player';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      is_liked: false,
      playList: [
        {
          file: "https://content.jwplatform.com/manifests/yp34SRmf.m3u8",
          image: "https://1kabswnt2ua3ivl0cuqv2f17-wpengine.netdna-ssl.com/wp-content/uploads/2014/10/Bike-riding.jpg",
        }
      ],
    };
  }

  changeLikeButton = (id) => {
    window.jwplayer('live-player').removeButton(id);
    window.jwplayer('live-player').addButton(
      "",
      "You already liked the video",
      () => {
        console.log("You already liked the video");
      },
      id,
    );
  };

  setupPlayerOnReady = (event) => {
    window.jwplayer('live-player').addButton(
      "",
      "Like the Video",
      () => {
        this.setState({ is_liked: true }, () => this.changeLikeButton("like-video"))
      },
      "like-video"
    );
  };

  render() {
    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
        <div className="bg_heart">
          <div className={this.state.is_liked ? "liked-video" : "not-liked-video"} style={{ height: 720, width: 1280 }}>
            <ReactJWPlayer
              playerId="live-player"
              onReady={this.setupPlayerOnReady}
              playlist={this.state.playList}
              playerScript="https://cdn.jwplayer.com/libraries/pUQtdZir.js"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
