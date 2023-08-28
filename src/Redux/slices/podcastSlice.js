import { createSlice } from "@reduxjs/toolkit";

const podcastSlice = createSlice({
  name: "podcast",
  initialState: {
    // Initialize the podcastData state as an empty array
    podcastData: [],
  },
  reducers: {
    setPodcastData: (state, action) => {
      state.podcastData = action.payload; // Update the podcastData state with the payload
    },
  },
});

export const { setPodcastData } = podcastSlice.actions;
export default podcastSlice.reducer;
