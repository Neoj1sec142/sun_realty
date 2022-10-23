// Service and Styles
import React from 'react'
import './sass/main.scss'
import { Provider } from 'react-redux';
import store from './store'
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


const App = () => {
  return (
    <Provider store={store}>
      <HelmetProvider>
      <Router>
        <Layout>
          <Routes>
            <Route exact path='/' element={<Home />}/>
            <Route path='/about' element={<About />}/>
            <Route path='/contact' element={<Contact />}/>
            <Route path='/listings/:id' element={<ListingDetail />}/>
            <Route path='/listings' element={<Listings />}/>
            <Route path='/login' element={<Signin />}/>
            <Route path='/signup' element={<Login />}/>
            <Route path='*' element={<NotFound />}/>
          </Routes>
        </Layout>
      </Router>
      </HelmetProvider>
    </Provider>
  );
}

export default App;
