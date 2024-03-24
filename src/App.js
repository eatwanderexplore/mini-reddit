import './App.css';
import { FaReddit } from "react-icons/fa";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DropdownMenu from './features/subreddit/subredditDropdown';
import Search from './features/search/search';

function App() {
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
        <DropdownMenu />
      </div>
    </div>
  );
}

export default App;
