import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const loadCommentsForPostId = createAsyncThunk(
    'comments/loadCommentsForPostId',
    async ({ subredditUrl, postId }) => {
        try {
            console.log("subredditUrl: ", subredditUrl);
            console.log("postId: ", postId);
            const response = await fetch(`https://www.reddit.com/${subredditUrl}/comments/${postId}.json`);
            const data = await response.json();
            return { postId, comments: data };
        } catch (error) {
            console.error('Error fetching comments:', error);
            throw error;
        }
    }
);

export const commentsSlice = createSlice({
    name: 'comments',
    initialState: {
        isLoadingComments: false,
        failedToLoadComments: false,
        byPostId: {},
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(loadCommentsForPostId.pending, (state, action) => {
                state.isLoadingComments = true;
                state.failedToLoadComments = false;
            })
            .addCase(loadCommentsForPostId.fulfilled, (state, action) => {
                const { postId, comments } = action.payload;
                state.isLoadingComments = false;
                state.failedToLoadComments = false;
                state.byPostId[postId] = comments || [];
            })
            .addCase(loadCommentsForPostId.rejected, (state, action) => {
                state.isLoadingComments = false;
                state.failedToLoadComments = true;
            });
    },
});

export const selectComments = (state) => state.comments.byPostId;
export default commentsSlice.reducer;
export const isLoadingComments = (state) => state.comments.isLoadingComments;