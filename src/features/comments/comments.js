import React from 'react';
const Comments = (props) => {
    const { comment } = props;
  
    return (
        <div>
            <p className="comment-author">{comment.author}: </p>
            <p className="comment-body">{comment.body}</p>
        </div>
    );
};

export default Comments;
