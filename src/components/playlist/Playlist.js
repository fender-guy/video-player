import React from "react";
import { connect } from "react-redux";
import SinglePlaylistVideo from "./SinglePlaylistVideo";

const mapState = state => ({
  playlist: state.get("playlist")
});

export const Playlist = props => {
  return (
    <div className="playlist-section">
      {props.playlist.map(el => {
        return (
          <SinglePlaylistVideo
            id={el.get("platform_id")}
            key={el.get("platform_id")}
          />
        );
      })}
    </div>
  );
};

export default connect(
  mapState,
  {}
)(Playlist);
