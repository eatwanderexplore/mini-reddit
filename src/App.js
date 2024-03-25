import './App.css';
import { FaReddit } from "react-icons/fa";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DropdownMenu from './features/subreddit/subredditDropdown';
import Search from './features/search/search';
import PostsList from './features/Posts/postsList';
import React, {useState} from 'react';

function App() {
  const [selectedTopic, setSelectedTopic] = useState(null);

  const handleTopicSelect = (topic) => {
    setSelectedTopic(topic);
  };

  return (
    <div className="App">
      <header className="App-header">
        <FaReddit className='reddit-icon' />
        miniReddit
        <div className="search">
      <Router>
      <Routes>
        <Route path="/" element={<Search />} />
      </Routes>
    </Router>
      </div>
      </header>
     
      <div className='dropdown'>
        <DropdownMenu onTopicSelect={handleTopicSelect}/>
        {selectedTopic && <PostsList subreddit={selectedTopic} />}
      </div>
    </div>
  );
}

export default App;
