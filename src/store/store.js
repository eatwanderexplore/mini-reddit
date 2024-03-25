import { configureStore } from "@reduxjs/toolkit";
import subredditReducer from "../features/subreddit/subredditSlice";
import commentsReducer from '../features/comments/commentsSlice';

export const store = configureStore({
    reducer: {
        comments: commentsReducer,
        subreddit: subredditReducer,
    }
});
