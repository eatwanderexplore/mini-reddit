import React from 'react';
import Comments from '../comments/comments';

const PostsList = (props) => {
  const {post, onToggleComments } = props;

  const renderComments = () => {
    if(post.showingComments) {
      return (
        <div>
          {post.comments.map((comment) => (
            <Comments comment={comment} key={comment.id} />
          ))}
        </div>
      );
    }
    return null;
  };

  return (
      <div className="post-container">
        <h3 className="post-title">{post.title}</h3>

        <div className="post-image-container">
          <img src={post.url} alt="" className="post-image" />
        </div>

      <div className="post-details">
      <span className="author-username">{post.author}</span>
      {post.body}
      </div>
      <span className="post-comments-container">
                <button
                  type="button"
                  className={`${
                    post.showingComments && 'showing-comments'
                  }`}
                  onClick={() => onToggleComments(post.permalink)}
                  aria-label="Show comments"
                >
                  {post.showingComments ? `Hide Comments (${post.comments.length})` : `Show Comments`}
                </button>
              </span>
              {renderComments()}
    </div>
    )
};  

export default PostsList;
