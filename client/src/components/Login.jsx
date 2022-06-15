import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { LoginContext } from '../LoginContext'
import Client from '../services/Axios'

const Login = () => {
    const navigate = useNavigate()
    const {setLoginStatus} = useContext(LoginContext)
    const [login, setLogin] = useState({ username: '', password: '' })

    const handleChange = (e) => {setLogin({...login, [e.target.name]: e.target.value})}

    const handleSubmit = async (e) => {
        e.preventDefault()
        await Client.post('token/obtain/', {
            username: login.username,
            password: login.password
        })
        .then(res => {
            if(res.status === 200){
                Client.defaults.headers['Authorization'] = `JWT ${res.data.access}`
                localStorage.setItem('access_token', res.data.access)
                localStorage.setItem('refresh_token', res.data.refresh)
            }else{return res}
        })
        .then(res => {
            Client.get(`users/${login.username}`)
            .then(res => {
                localStorage.setItem('user_id', res.data.id)
                localStorage.setItem('username', login.username)
                setLoginStatus(true)
                navigate('/land')
            })
        })
        .catch(err => console.log(err))
    }
    
    return(
        <div>
            <form onSubmit={handleSubmit}>
                Username: <input type='text' name='username' placeholder='Username'
                    value={login.username} onChange={handleChange} />
                Password: <input type='password' name='password' placeholder='Password'
                    value={login.password} onChange={handleChange} />
                <button type='submit'>Login</button>
            </form>
            <div className='form-footer'>
                 <p>Don't have an account yet?</p> 
                 <a href='/register/'>Register</a>
            </div>
        </div>
    )
}

export default Login