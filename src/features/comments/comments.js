import React from 'react';
import './comments.css';
const Comments = (props) => {
    const { comment } = props;
  
    return (
        <div className="comment-container">
            <p className="comment-author">{comment.author}: </p>
            <p className="comment-body">{comment.body}</p>
        </div>
    );
};

export default Comments;
