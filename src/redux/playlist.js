import Immutable from "immutable";
import { createSelector } from "reselect";

export const changeVideoAction = "CHANGE_VIDEO_ACTION";
export const playNextVideoAction = "PLAY_NEXT_VIDEO";

export default (state = Immutable.fromJS({}), action) => {
  const { type, id } = action;

  switch (type) {
    case changeVideoAction:
      const index = state.findIndex(el => el.get("platform_id") === id);
      state = state.map(el => el.set("playing", false));
      return state.setIn([index, "playing"], true);
    case playNextVideoAction:
      const ind = state.findIndex(el => el.get("playing") === true);
      state = state.map(el => el.set("playing", false));
      if (state.get(ind + 1)) {
        return state.setIn([ind+1, "playing"], true);
      }
      return state.setIn([0, "playing"], true);
    default:
      return state;
  }
};

export const changeVideo = id => ({
  type: changeVideoAction,
  id
});

export const playNextVideo = () => ({
  type: playNextVideoAction
});

const getPlaylist = state => state.get("playlist");
export const heroVideoSelector = createSelector([getPlaylist], playlist => {
  return playlist.toJS().filter(el => el.playing === true)[0];
});

export const createSingleVideoSelector = id =>
  createSelector([getPlaylist], playlist => {
    return playlist.filter(el => el.get("platform_id") === id).get(0);
  });
