import React from 'react'

const Landing = () => {
    
    return(
        <div className='land'>
            <br></br>
            <div className='card'>
                <br></br>
                <a href='/login'>
                <button className='btn btn-outline-dark'>Get Started</button>
                </a>
                <br></br>
                <a href='/register'>
                <button className='btn btn-outline-dark'>Create Account</button>
                </a>
            </div>
        </div>
    )
}

export default Landing
