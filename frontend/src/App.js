import React from 'react'
import Layout from './hoc/Layout'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import About from './containers/About'
import Contact from './containers/Contact'
import Home from './containers/Home'
import ListingDetail from './containers/ListingDetail'
import Listings from './containers/Listings'
import Signin from './containers/Signin'
import Signup from './containers/Signup'
import NotFound from './components/NotFound'
import './sass/main.scss'


const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route exact path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/contact' element={<Contact />}/>
          <Route path='/listings/:id' element={<ListingDetail />}/>
          <Route path='/listings' element={<Listings />}/>
          <Route path='/login' element={<Signin />}/>
          <Route path='/signup' element={<Signup />}/>
          <Route path='*' element={<NotFound />}/>
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
