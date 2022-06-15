import React, {useEffect, useContext} from 'react';
import { useNavigate } from 'react-router-dom'
import {LoginContext} from '../LoginContext'
import Client from '../services/Axios'

const Logout = (props) => {
    const {setLoginStatus} = useContext(LoginContext)
    const logout = async () => {
        await Client.post('users/logout', {
            refresh_token: localStorage.getItem('refresh_token')
        })
        .then(res => {
            if(res.status){
                setLoginStatus(false)
                return res
            }else{return res}
        })
        .catch(err => {
            return console.log(err)
        })
    }
    useEffect(()=> {
        logout()
        setLoginStatus(false)
        localStorage.removeItem('refresh_token')
        localStorage.removeItem('access_token')
        localStorage.removeItem('token')
        localStorage.removeItem('username')
        localStorage.removeItem('user_id')
    },[])
    return(<div>You have logged out</div>)
}

export default Logout