import { configureStore } from "@reduxjs/toolkit";
import subredditReducer from "./subredditSlice";
import commentsReducer from './commentsSlice';

export const store = configureStore({
    reducer: {
        comments: commentsReducer,
        subreddit: subredditReducer,
    }
});
