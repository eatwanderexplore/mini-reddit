import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPostsFromSubreddit, isLoadingPosts, selectPosts } from "../subreddit/subredditSlice";

const PostsList = ({ subreddit }) => {
    const dispatch = useDispatch();
    const posts = useSelector(selectPosts);
    const loading = useSelector(isLoadingPosts);

    useEffect(() => {
        dispatch(fetchPostsFromSubreddit(subreddit));
    }, [dispatch, subreddit]);

    return (
        <div>
            {loading && <p>Loading posts...</p>}
            {posts.length === 0 && !loading && <p>No posts found.</p>}
            {posts.length > 0 && (
                <ul>
                    {posts.map((post) => (
                        <li key={post.id}>
                            <a href={post.url} target='_blank' rel='noopener noreferrer'>{post.title}</a>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
};

export default PostsList;