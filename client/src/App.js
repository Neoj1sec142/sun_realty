// Service Imports
import {Routes, Route} from 'react-router-dom'
// Page / Component Imports
import Main from './pages/Main';
import Grid from './components/grid/Grid'
import Landing from './pages/Landing';
import Register from './components/base/Register';
import Login from './components/base/Login';
import Logout from './components/base/Logout';
import NavB from './components/base/Nav';
// Style Imports
import 'bootstrap/dist/css/bootstrap.css';
import './styles/App.css';

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
        <Route path="/logout" element={<Logout />} />
        {/* Staff Routes */}
        <Route path="/grid" element={<Grid />} />
      </Routes>
    </div>
  );
}

export default App;
