import {Routes, Route} from 'react-router-dom'
import './App.css';
import Main from './Main.jsx'
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main/>}/>
      </Routes>

    </div>
  );
}

export default App;
