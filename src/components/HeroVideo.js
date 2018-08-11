import React from "react";
import { connect } from "react-redux";
import { Player } from "video-react";
import { heroVideoSelector, playNextVideo } from "../redux/playlist";

const mapState = state => ({
  heroVideo: heroVideoSelector(state)
});

let executed = false;
let autoPlay = false;

const delayOnce = (cb) => {
    let ex = false;
    if(!ex) {
        setTimeout(() => {
            cb();
        }, 1000);
    }
}

export class HeroVideo extends React.Component {
  constructor(props) {
    super(props);
    this.playerRef = React.createRef();
  }

  componentDidMount() {
    this.playerRef.current.subscribeToStateChange(this.handleStateChange);
  }

  handleStateChange = state => {
    if (state.ended && !executed) {
      executed = true;
      autoPlay = true;
      this.props.playNextVideo();
    }

    if (state.hasStarted && executed) {
        delayOnce(() => {
            executed = false;
        })
    }
  };

  render() {
    const { content_url, title } = this.props.heroVideo;
    return (
      <div className="hero-video-container">
        <Player fluid {...{autoPlay}} src={content_url} ref={this.playerRef} />
        <h2>{title}</h2>
      </div>
    );
  }
}

export default connect(
  mapState,
  { playNextVideo }
)(HeroVideo);
