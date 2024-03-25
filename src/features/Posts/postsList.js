import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPostsFromSubreddit, selectPosts, isLoadingPosts } from "../subreddit/subredditSlice";

const PostsList = ({ subreddit }) => {
  const dispatch = useDispatch();
  const posts = useSelector(selectPosts);
  const loading = useSelector(isLoadingPosts);

  useEffect(() => {
    dispatch(fetchPostsFromSubreddit(subreddit));
  }, [dispatch, subreddit]);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {!loading && (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <a href={post.url} target='_blank' rel='noopener noreferrer'>{post.title}</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PostsList;
