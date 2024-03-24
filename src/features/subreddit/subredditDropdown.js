import React, { useState, useEffect } from 'react';

const DropdownMenu = ({ onTopicSelect }) => {
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

  const handleTopicSelect = (topic) => {
    setIsOpen(false);
    onTopicSelect(topic); // Pass the selected topic to the parent component
  };

  return (
    <div className="dropdown">
      <button className="dropdown-toggle" onClick={() => setIsOpen(!isOpen)}>
        Choose a topic
      </button>
      {isOpen && (
        <div className="dropdown-menu">
          <ul>
            {topics.map((topic, index) => (
              <li key={index}>
                <button onClick={() => handleTopicSelect(topic)}>
                  {topic.display_name}
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
