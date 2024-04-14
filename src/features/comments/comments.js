import React from 'react';
import { useSelector } from 'react-redux';

const Comments = ({ comment }) => {

    const postComments = useSelector(state => state.reddit.posts[comment.id]?.comments || []);

    console.log('postComments: ', postComments);

    return (
        <div>
            <ul>
                {postComments.map(comment => (
                    <li key={comment.id}>
                        <p>{comment.author}</p>
                        <p>{comment.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Comments;
