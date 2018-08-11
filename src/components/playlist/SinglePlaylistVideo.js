import React from "react";
import { connect } from "react-redux";
import { createSingleVideoSelector, changeVideo } from "../../redux/playlist";
import classnames from 'classnames';

const mapState = (state, ownProps) => {
  const singleVideoSelector = createSingleVideoSelector(ownProps.id);

  return {
    video: singleVideoSelector(state)
  };
};

export const SinglePlaylistVideo = props => {
  const { video, id } = props;
  const { image_url, title, playing } = video.toJS();
  const classes = classnames({
    "playlist-video-container": true,
    "playing": playing
  });

  const clickHandler = () => {
    props.changeVideo(id);
  };

  return (
    <div className={classes} onClick={clickHandler}>
      <img src={image_url} alt={title} />
      <h3>{title}</h3>
    </div>
  );
};

export default connect(
  mapState,
  {changeVideo}
)(SinglePlaylistVideo);
