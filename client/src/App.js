// SERVICE IMPORTS
import React, {useEffect, useState} from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginContext from './LoginContext'
import Client from './services/Axios'
// PAGES IMPORTS
// COMPONENT IMPORTS
// LOGIN IMPORTS
import NavDrop from './components/Nav.jsx'
import Login from './components/Login'
import Register from './components/Register'
import Logout from './components/Logout'
import Home from './pages/Home'
import Land from './pages/Land'
// STYLE IMPORTS
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

const App = () => {
  const [loginStatus, setLoginStatus] = useState(false)
  const [user, setUser] = useState({})
  useEffect(() => {
    const user_id = localStorage.getItem('user_id')
    const username = localStorage.getItem('username')
    setUser(user_id, username)
    if(user_id && username){
      if(loginTest(username)) setLoginStatus(true)
    }else setLoginStatus(false)
  }, [loginStatus])

  const loginTest = async (username) => {
    await Client.get(`users/${username}`)
    .then(res => {
      if (res.status === 200){
        setLoginStatus(true)
        return true
      }else{
        setLoginStatus(false)
        return false
      }
    })
    .catch(err => {
      setLoginStatus(false)
      console.log(err, "ERROR HERE")
    })
  }
  return (
    <div className="App">
      <LoginContext.Provider value={{loginStatus, setLoginStatus, user, setUser}}>
      <header className="App-header">
      </header>
      <Routes>
        {/* Login Routes  */}
        <Route path='/register' element={ <Register loginStatus={loginStatus}/> } />
        <Route path='/login' element={ <Login loginStatus={loginStatus}/> } />
        <Route path='/logout' element={ <Logout /> } />
        {/* Page Routes  */}
        <Route path='/' element={<Land loginStatus={loginStatus}/>}/>
        <Route path='/land' element={<Home loginStatus={loginStatus}/>}/>
      </Routes>
      </LoginContext.Provider>
    </div>
  );
}

export default App;
