import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts, selectFilteredPosts, fetchComments, toggleShowingComments } from '../../store/redditSlice';
import Comments from '../comments/comments';

const PostsList = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectFilteredPosts);
  console.log(posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const handleToggleComments = (index, permalink) => {
    dispatch(toggleShowingComments(index));
    if (!posts[index].showingComments) {
      dispatch(fetchComments(index, permalink));
    }
  };

  return (
    <div>
      <ul>
        {posts.map((post, index) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.selftext}</p>
            <button onClick={() => handleToggleComments(index, post.permalink)}>
              {post.showingComments ? 'Hide Comments' : 'Show Comments'}
            </button>
            {post.showingComments && <Comments comments={post.comments} />}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsList;
