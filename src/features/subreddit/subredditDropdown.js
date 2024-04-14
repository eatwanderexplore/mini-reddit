import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSubreddits, selectSubreddits } from '../../store/subredditSlice';
import './subredditDropdown.css';

const DropdownMenu = ({ onSubredditSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const subreddits = useSelector(selectSubreddits);
  const selectedSubreddit = useSelector((state) => state.reddit.selectedSubreddit);

  useEffect(() => {
    dispatch(fetchSubreddits());
  }, [dispatch]);

  const handleSubredditSelect = (subreddit) => {
    setIsOpen(false);
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
