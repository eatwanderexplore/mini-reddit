import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts, selectFilteredPosts, fetchComments, setSearchTerm, toggleShowingComments } from '../../store/redditSlice';
import Comments from '../comments/comments';

const PostsList = ({selectedSubreddit}) => {
  const reddit = useSelector((state) => state.reddit);
  const { error, searchTerm } = reddit;
  const dispatch = useDispatch();
  const posts = useSelector(selectFilteredPosts);

  useEffect(() => {
    if (selectedSubreddit) {
      dispatch(fetchPosts(selectedSubreddit.url));
    }
  }, [dispatch, selectedSubreddit]);


  const handleToggleComments = (index, permalink) => {
    dispatch(toggleShowingComments(index));
    if (!posts[index].showingComments) {
      dispatch(fetchComments(index, permalink));
    }
  };

  if (error) {
    return (
      <div className="error">
        <h2>Failed to load posts.</h2>
        <button
          type="button"
          onClick={() => dispatch(fetchPosts(selectedSubreddit.url))}
        >
          Try again
        </button>
      </div>
    );
  }

  if (posts.length === 0) {
    return (
      <div className="error">
        <h2>No posts matching "{searchTerm}"</h2>
        <button type="button" onClick={() => dispatch(setSearchTerm(''))}>
          Go home
        </button>
      </div>
    );

  }

  return (
    <div>
      <ul>
        {posts.map((post, index) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <div className="post-image-container">
              <img src={post.url} alt="" className="post-image" />
            </div>
            <p>{post.selftext}</p>
            <button onClick={() => handleToggleComments(index, post.permalink)}>
              {post.showingComments ? `Hide Comments (${post.comments.length})` : `Show Comments (${post.comments.length})`}
            </button>
            {post.showingComments && (
              <div>
                {post.comments.map((comment) => (
                  <Comments comment={comment} key={comment.id} />
                ))}
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};  

export default PostsList;
