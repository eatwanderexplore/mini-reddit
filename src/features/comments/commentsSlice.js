import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const loadCommentsForPostId = createAsyncThunk(
    'comments/loadCommentsForPostId',
    async (id) => {
        const response = await fetch(`${URL}/comments`); //update URL!
        const json = await response.json();
        return json;
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
                state.isLoadingComments = false;
                state.failedToLoadComments = false;
                state.byPostId[action.payload.postId] = action.payload.comments;
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