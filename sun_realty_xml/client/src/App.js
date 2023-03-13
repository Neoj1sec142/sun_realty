import React from 'react'
import { connect } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import Layout from './utils/Layout'
import Main from './containers/Main'

const App = () => {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path='/' element={<Main />} />
        </Routes>
      </Layout>
    </div>
  )
}

export default connect(null, {})(App);