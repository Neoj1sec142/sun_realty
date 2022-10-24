// Service and Styles
import React from 'react'
import './sass/main.scss'
import { connect } from 'react-redux';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
// Pages and Components
import Layout from './hoc/Layout'
import About from './containers/About'
import Contact from './containers/Contact'
import Home from './containers/Home'
import ListingDetail from './containers/ListingDetail'
import Listings from './containers/Listings'
import Signin from './containers/Signin'
import Login from './containers/Signup'
import NotFound from './components/NotFound'


const App = ({isAuthenticated}) => {
  console.log(isAuthenticated, "IS AUTH")
  return (
      <HelmetProvider>
        <Router>
          <Layout>
            <Routes>
              <Route exact path='/' element={<Home />}/>
              <Route path='/about' element={<About />}/>
              <Route path='/contact' element={<Contact />}/>
              <Route path='/listings' element={<Listings />}/>
              <Route path='/login' element={<Signin />}/>
              <Route path='/signup' element={<Login />}/>
              <Route path='*' element={<NotFound />}/>
              {/* PROTECTED ROUTES */}
              {isAuthenticated ? (
                <Route path='/listings/:id' element={<ListingDetail />}/>
              ) : (
                <Route path='/listings/:id' element={<Signin />}/>
              )}
            </Routes>
          </Layout>
        </Router>
      </HelmetProvider>
  );
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps)(App);
