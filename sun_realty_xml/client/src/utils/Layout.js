import React from 'react'
// import Navbar from '../components/base/Navbar'
import { connect } from 'react-redux'

const Layout = ({children, load_current}) => {
    
  
    return(
        <div>
            {/* <Navbar /> */}
            
            {children}
        </div>
    )
}
export default connect(null, {})(Layout)