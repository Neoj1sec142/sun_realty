import React, {useEffect, useState} from 'react'
import Client from '../services/api'

const Logout = () => {

    const logout = async () => {
        await Client.post('users/logout/', {
            refresh_token: localStorage.getItem('refresh_token')
        })
        .then(res => {
            if(res.status){
                return res
            }else{return res}
        })
        .catch(err => {
            return console.log(err, "Logout Err")
        })
    }
    useEffect(() => {
        logout()
        localStorage.removeItem('refresh_token')
        localStorage.removeItem('access_token')
        localStorage.removeItem('token')
        localStorage.removeItem('username')
        localStorage.removeItem('user_id')
    },[])
    return(
        <div className='container-fluid'>
            <div className='card'>
                <h1>You Have Logged Out.</h1>
                <h4><a href='/login'>Click Here</a> to login back in.</h4>
            </div>
        </div>
    )
}

export default Logout