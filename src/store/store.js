import { configureStore, combineReducers } from '@reduxjs/toolkit';
import redditReducer from './redditSlice';
import subredditReducer from './subredditSlice';

const store = configureStore({
  reducer: combineReducers({
    reddit: redditReducer,
    subreddits: subredditReducer,
  }),
});

export default store;
