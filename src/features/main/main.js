import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PostsList from "../Posts/postsList";
import { fetchPosts, 
    selectFilteredPosts, 
    setSearchTerm, 
    fetchComments } from "../../store/redditSlice";

const Main = ({selectedSubreddit}) => {
    const reddit = useSelector((state) => state.reddit);
    const { isLoading, error, searchTerm } = reddit;
    const posts = useSelector(selectFilteredPosts);
    const dispatch = useDispatch();

    useEffect(() => {
      if (selectedSubreddit) {
        dispatch(fetchPosts(selectedSubreddit.url));}
    }, [dispatch, selectedSubreddit]);
    
    const onToggleComments = (index) => {
        const getComments = (permalink) => {
            dispatch(fetchComments(index, permalink));
        };
        
        return getComments;
    };

    if (isLoading) {
        return (
            <h3>Please wait...</h3>
        );
    }
    if (error) {
        return (
        <>
        <h2>Sorry, error loading posts.</h2>
        <button type="button" onClick={() => dispatch(fetchPosts(selectedSubreddit.url))}>
            Try again
        </button>
        </>);
    }
    if (posts.length === 0) {
        return (
            <>
            <h2>No posts match "{searchTerm}"</h2>
            <button type="button" onClick={() => dispatch(setSearchTerm(''))}>
          Go home
        </button>
            </>
        );
    }
    return (
        <>
        {posts.map((post, index) => (
            <PostsList key={post.id} post={post} onToggleComments={onToggleComments(index)}/>
        ) )}
        </>
    )

}

export default Main;