import './App.css';
import { RouterProvider } from 'react-router-dom';
import DropdownMenu from './features/subreddit/subredditDropdown';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Header
      </header>
      <div className='dropdown'>
        <DropdownMenu />
      </div>
    </div>
  );
}

export default App;
