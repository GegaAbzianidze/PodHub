import { configureStore } from '@reduxjs/toolkit';
import playerReducer from './slices/playerSlice';
import podcastDataReducer from './slices/podcastSlice';

const store = configureStore({
  reducer: {
    player: playerReducer,
    podcast: podcastDataReducer
  },
});

export default store;
