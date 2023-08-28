import { createSlice } from "@reduxjs/toolkit";

const playerSlice = createSlice({
  name: "player",
  initialState: {
    // Initialize the podcastData state as an empty array
    currentMedia: null,
    isPlaying: false,
    currentTime: 0,
  },
  reducers: {
    setCurrentMedia: (state, action) => {
      state.currentMedia = action.payload;
      state.podcastData = action.payload; // Update the podcastData state with the payload
    },
    setIsPlaying: (state, action) => {
      state.isPlaying = action.payload;
    },
  },
});

export const { setCurrentMedia, setIsPlaying } =
  playerSlice.actions;
export default playerSlice.reducer;
