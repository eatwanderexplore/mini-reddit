import React, { useEffect, useState } from "react";

const PostsList = ({ subreddit }) => {
    const [posts, setPosts] = useState([]);
  
    useEffect(() => {
      const fetchPosts = async () => {
        try {
          const response = await fetch(`https://www.reddit.com/r/${subreddit}.json`);
          const data = await response.json();
          console.log('Fetched posts', data);
          setPosts(data.data.children.map(child => child.data));
        } catch (error) {
          console.error('Error fetching posts:', error);
        }
      };
  
      fetchPosts();
    }, [subreddit]);

    return (
        <div>
        
                <ul>
                    {posts.map((post) => (
                        <li key={post.id}>
                            <a href={post.url} target='_blank' rel='noopener noreferrer'>{post.title}</a>
                        </li>
                    ))}
                </ul>
            
        </div>
    )
};

export default PostsList;