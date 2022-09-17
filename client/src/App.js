// Service Imports
import {Routes, Route} from 'react-router-dom'
// Page / Component Imports
import Main from './pages/Main';
// Style Imports
import 'bootstrap/dist/css/bootstrap.css';
import './styles/App.css';
import Landing from './pages/Landing';
import Register from './components/Register';
import Login from './components/Login';
import NavB from './components/Nav';

const App = () => {
  return (
    <div className="App">
      <header className="master-header">
        <NavB />
      </header>
      <Routes>
        {/* Base Routes */}
        <Route path="/" element={<Landing />} />
        <Route path="/main" element={<Main />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
