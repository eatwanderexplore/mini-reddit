import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadCommentsForPostId, selectComments, isLoadingComments } from "../comments/commentsSlice";

const Comments = ({ subredditUrl, postId }) => {
  const dispatch = useDispatch();
  const comments = useSelector(selectComments);
  const loading = useSelector(isLoadingComments);

  useEffect(() => {
    dispatch(loadCommentsForPostId({ subredditUrl, postId }));
  }, [dispatch, subredditUrl, postId]);

  console.log("comments[postId]: ", comments[postId]);

  return (
    <div>
      {loading && <p>Loading comments...</p>}
      {!loading && (
        <ul>
          {comments[postId] && comments[postId].map((comment) => (
            <li key={comment.id}>
              {/* Render each comment */}
              {comment.body}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Comments;