import "../../node_modules/video-react/dist/video-react.css";
import "./App.css";
import React from "react";
import HeroVideo from "./HeroVideo";
import Playlist from "./playlist/Playlist";

export const App = props => (
  <div className="App">
    <HeroVideo />
    <Playlist />
  </div>
);
