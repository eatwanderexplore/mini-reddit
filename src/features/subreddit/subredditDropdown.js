import React, { useState, useEffect } from 'react';
import { getSubreddits } from '../../api/reddit';
import './subredditDropdown.css';

const DropdownMenu = ({ onSubredditSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [subreddits, setSubreddits] = useState([]);
  const [selectedSubreddit, setSelectedSubreddit] = useState(null);

  useEffect(() => {
    const fetchSubreddits = async () => {
      try {
        // Call the getSubreddits function to fetch subreddits
        const subredditsList = await getSubreddits();
        setSubreddits(subredditsList);
      } catch (error) {
        console.error('Error fetching subreddits:', error);
      }
    };

    fetchSubreddits();
  }, []);

  const handleSubredditSelect = (subreddit) => {
    setIsOpen(false);
    setSelectedSubreddit(subreddit);
    onSubredditSelect(subreddit);
  };

  return (
    <div className="dropdown">
      <button className="dropdown-toggle" onClick={() => setIsOpen(!isOpen)}>
       {selectedSubreddit ? selectedSubreddit.display_name : "Choose a topic"}
      </button>
      {isOpen && (
        <div className="dropdown-menu">
          <ul>
            {subreddits.map((subreddit, index) => (
              <li key={index}>
                <button onClick={() => handleSubredditSelect(subreddit)}>
                  {subreddit.display_name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
