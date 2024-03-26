import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getSubredditPosts } from "../api/reddit";

export const fetchPostsFromSubreddit = createAsyncThunk(
    'subreddit/fetchPostsFromSubreddit',
    async (subreddit) => {
        try {
            const posts = await getSubredditPosts(subreddit);
            return posts;
        } catch (error) {
            console.error('Error fetching posts:', error);
            throw error;
        }
    }
);

export const subredditSlice = createSlice({
    name: 'subreddit',
    initialState: {
        isLoadingPosts: false,
        failedToLoadPosts: false,
        posts: [],
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPostsFromSubreddit.pending, (state, action) => {
                state.isLoadingPosts = true;
                state.failedToLoadPosts = false;
            })
            .addCase(fetchPostsFromSubreddit.fulfilled, (state, action) => {
                state.isLoadingPosts = false;
                state.failedToLoadPosts = false;
                state.posts = action.payload;
            })
            .addCase(fetchPostsFromSubreddit.rejected, (state, action) => {
                state.isLoadingPosts = false;
                state.failedToLoadPosts = true;
            });
    },
});

export const selectPosts = (state) => state.subreddit.posts;
export const isLoadingPosts = (state) => state.subreddit.isLoadingPosts;

export default subredditSlice.reducer;
