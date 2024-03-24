import './App.css';
import { FaReddit } from "react-icons/fa";
import { RouterProvider } from 'react-router-dom';
import DropdownMenu from './features/subreddit/subredditDropdown';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <FaReddit className='reddit-icon' />
        miniReddit
      </header>
      <div className='dropdown'>
        <DropdownMenu />
      </div>
    </div>
  );
}

export default App;
