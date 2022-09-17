import React, {useState} from 'react'
import Login from '../components/Login'

const Landing = () => {
    const [state, setState] = useState(false)
    if(state){
        return(
            <Login />   
        )
    }else if(!state){
        return(
            <div className='land'>
                <div className='card'>
                    <button onClick={() => setState(true)}
                            className='btn btn-outline-dark'>Get Started</button>
                </div>
            </div>
        )
    }
}

export default Landing
