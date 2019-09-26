import React from 'react';
import './App.css';
import ReactJWPlayer from 'react-jw-player';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      is_liked: false,
      playList: [{
        file: "https://content.jwplatform.com/manifests/yp34SRmf.m3u8",
        image: "https://1kabswnt2ua3ivl0cuqv2f17-wpengine.netdna-ssl.com/wp-content/uploads/2014/10/Bike-riding.jpg",
      }],
    };
  }

  showHearts = () => {
    var love = setInterval(function() {
      var r_num = Math.floor(Math.random() * 40) + 1;
      var r_size = Math.floor(Math.random() * 65) + 10;
      var r_left = Math.floor(Math.random() * 100) + 1;
      var r_bg = Math.floor(Math.random() * 25) + 100;
      var r_time = Math.floor(Math.random() * 5) + 5;

      let bg_heart = document.getElementById('bg_heart');

      let heart1 = document.createElement('div');
      heart1.className = "heart";
      heart1.style = "width:" + r_size + "px;height:" + r_size + "px;left:" + r_left + "%;background:rgba(255," + (r_bg - 25) + "," + r_bg + ",1);-webkit-animation:love " + r_time + "s ease;-moz-animation:love " + r_time + "s ease;-ms-animation:love " + r_time + "s ease;animation:love " + r_time + "s ease";

      let heart2 = document.createElement('div');
      heart2.className = "heart";
      heart2.style = "width:" + (r_size - 10) + "px;height:" + (r_size - 10) + "px;left:" + (r_left + r_num) + "%;background:rgba(255," + (r_bg - 25) + "," + (r_bg + 25) + ",1);-webkit-animation:love " + (r_time + 5) + "s ease;-moz-animation:love " + (r_time + 5) + "s ease;-ms-animation:love " + (r_time + 5) + "s ease;animation:love " + (r_time + 5) + "s ease";

      bg_heart.appendChild(heart1);
      bg_heart.appendChild(heart2);
      
    }, 10);

    setTimeout(() => {
      clearInterval(love);
    }, 1000);
  };

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
        this.showHearts();
        this.setState({
          is_liked: true
        }, () => this.changeLikeButton("like-video"))
      },
      "like-video"
    );
  };

  render() {
    return ( <
      div style = {
        {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh'
        }
      } >
      <
      div className = "bg_heart" id="bg_heart">
      <
      div className = {
        this.state.is_liked ? "liked-video" : "not-liked-video"
      }
      style = {
        {
          height: 720,
          width: 1280
        }
      } >
      <
      ReactJWPlayer playerId = "live-player"
      onReady = {
        this.setupPlayerOnReady
      }
      playlist = {
        this.state.playList
      }
      playerScript = "https://cdn.jwplayer.com/libraries/pUQtdZir.js" /
      >
      <
      /div> < /
      div > <
      /div>
    );
  }
}

export default App;
