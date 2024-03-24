import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchPostsFromSubreddit = createAsyncThunk(
    'subreddit/fetchPostsFromSubreddit',
    async (subreddit) => {
        try {
            const response = await fetch(`https://www.reddit.com/r/${subreddit}.json?limit=10`);
            const data = await response.json();
            return data.data.children.map(child => child.data);
        } catch (error) {
            console.error('Error fetching posts:', error);
            throw error; // Re-throw the error for error handling
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
