// Service Imports
import {Routes, Route} from 'react-router-dom'
import Main from './pages/Main';
import './styles/App.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
