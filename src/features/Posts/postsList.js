import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPostsFromSubreddit, selectPosts, isLoadingPosts } from "../subreddit/subredditSlice";
import Comments from "../comments/comments";

const PostsList = ({ subreddit }) => {
  const dispatch = useDispatch();
  const posts = useSelector(selectPosts);
  const loading = useSelector(isLoadingPosts);

  useEffect(() => {
    dispatch(fetchPostsFromSubreddit(subreddit));
  }, [dispatch, subreddit]);

  const [expandedComments, setExpandedComments] = useState({});

  const toggleComments = (postId) => {
    setExpandedComments(prevState => ({
      ...prevState,
      [postId]: !prevState[postId]
    }));
  };

  return (
    <div>
      {loading && <p>Loading...</p>}
      {!loading && (
        <div className="post-container">
          <ul>
            {posts.map((post) => (
              <li key={post.id}>
                <h3><a href={post.url} target='_blank' rel='noopener noreferrer'>{post.title}</a></h3>
                {post.url && (post.url.includes(".jpg") || post.url.includes(".jpeg") || post.url.includes(".gif")) && ( // Check if post has an image URL
                  <div className="post-image-container">
                    <img src={post.url} alt="" className="post-image" />
                  </div>
                )}
                <p>{post.selftext}</p>
                <button onClick={() => toggleComments(post.url)}>
                  {expandedComments[post.url] ? "Hide Comments" : "Show Comments"}
                </button>
                {expandedComments[post.url] && (
                  <div className="comments-container">
                    <Comments postId={post.url} />
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default PostsList;
