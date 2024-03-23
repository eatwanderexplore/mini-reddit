import React, { useState, useEffect } from 'react';

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [subreddits, setSubreddits] = useState([]);

  useEffect(() => {
    const fetchSubreddits = async () => {
      try {
        const response = await fetch('https://www.reddit.com/subreddits.json?limit=10');
        const data = await response.json();
        const subredditsList = data.data.children.map(child => child.data);
        setSubreddits(subredditsList);
      } catch (error) {
        console.error('Error fetching subreddits:', error);
      }
    };

    fetchSubreddits();
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <button className="dropdown-toggle" onClick={toggleDropdown}>
        Select a subreddit
      </button>
      {isOpen && (
        <div className="dropdown-menu">
          <ul>
            {subreddits.map((subreddit, index) => (
              <li key={index}>
                <a href={`https://www.reddit.com/${subreddit.display_name_prefixed}`} target="_blank" rel="noopener noreferrer">
                  {subreddit.display_name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
