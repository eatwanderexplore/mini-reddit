import './App.css';
import { FaReddit } from "react-icons/fa";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DropdownMenu from './features/subreddit/subredditDropdown';
import Search from './features/search/search';
import Main from './features/main/main';
import React, {useState} from 'react';

function App() {
  const [selectedSubreddit, setSelectedSubreddit] = useState(null);

  const handleSubredditSelect = (subreddit) => {
    setSelectedSubreddit(subreddit);
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
        <DropdownMenu onSubredditSelect={handleSubredditSelect}/>
        {selectedSubreddit && <Main selectedSubreddit={selectedSubreddit} />}
      </div>
    </div>
  );
}

export default App;
