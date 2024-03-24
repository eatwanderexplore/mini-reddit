import React, { useState, useEffect } from 'react';

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    const fetchTopics = async () => {
      try {
        const response = await fetch('https://www.reddit.com/subreddits.json?limit=10');
        const data = await response.json();
        const topicsList = data.data.children.map(child => child.data);
        setTopics(topicsList);
      } catch (error) {
        console.error('Error fetching topics:', error);
      }
    };

    fetchTopics();
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <button className="dropdown-toggle" onClick={toggleDropdown}>
        choose a topic
      </button>
      {isOpen && (
        <div className="dropdown-menu">
          <ul>
            {topics.map((topic, index) => (
              <li key={index}>
                <a href={`https://www.reddit.com/${topic.display_name_prefixed}`} target="_blank" rel="noopener noreferrer">
                  {topic.display_name}
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
