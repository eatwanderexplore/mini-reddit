import React from 'react';
import { useSelector } from 'react-redux';

const Comments = ({ postId }) => {
  const comments = useSelector(state => state.reddit.posts[postId]?.comments || []);

  return (
    <div>
      <ul>
        {comments.map(comment => (
          <li key={comment.id}>
            <p>{comment.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Comments;
