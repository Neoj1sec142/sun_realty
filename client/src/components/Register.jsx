import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import Client from '../services/api'
// email
// first
// last_
// username
// passsword

const Register = () => {
    const navigate = useNavigate()
    const [form, setForm] = useState({
        email: '',
        first_name: '',
        last_name: '',
        username: '',
        password: '',
        confirm_password: ''
    })
    
    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
    }

    const registerAccount = async (e) => {
        e.preventDefault()
        await Client.post('users/create/', {
            email: form.email,
            first_name: form.first_name,
            last_name: form.last_name,
            username: form.username,
            password: form.password,
        })
        .then((res) => {
            localStorage.setItem('username', form.username)
            localStorage.setItem('user_id', res.data.id)
            Client.post('token/obtain/', {
                username: form.username,
                password: form.password
            }, {mode: "CORS"})
            .then(res => {
                Client.defaults.headers['Authorization'] = `JWT ${res.data.access}`
                localStorage.setItem('access_token', res.data.access)
                localStorage.setItem('refresh_token', res.data.refresh)
                navigate('/login')
                return res
            })
        })
        .catch(err => console.log(err, "Registration Err"))
    }

    return(
        <div className='container'>
            <br></br>
            <form className='form-group' onSubmit={registerAccount}>
                <br></br>
                <input className='form-control' 
                        name='username'
                        type='text'
                        onChange={handleChange}
                        placeholder='email'/>
                <input className='form-control' 
                        name='first_name'
                        type='text'
                        onChange={handleChange}
                        placeholder='first'/>
                <input className='form-control' 
                        name='last_name'
                        type='text'
                        onChange={handleChange}
                        placeholder='last'/>
                <input className='form-control' 
                        name='email'
                        type='email'
                        onChange={handleChange}
                        placeholder='username'/>
                <input className='form-control' 
                        name='password'
                        type='password'
                        onChange={handleChange}
                        placeholder='password'/>
                <input className='form-control' 
                        name='confirm_password'
                        type='password'
                        onChange={handleChange}
                        placeholder='confirm_password'/>
                {form.password !== '' && form.password === form.confirm_password
                ? <button type='submit' className='btn btn-outline-dark'>Register Account</button>
                : <button type='submit' disabled className='btn btn-outline-dark'>Register Account</button>
                }
                
            </form>
        </div>
    )
}

export default Register