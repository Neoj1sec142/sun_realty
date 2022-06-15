import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import Client from '../services/Axios'
import {LoginContext} from '../LoginContext'
import {Form, Card} from 'react-bootstrap'

const Register = () => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        email: '',
        first_name: '',
        last_name: '',
        username: '',
        password: ''
    })

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
        console.log(formData)
    } 

    const handleSubmit = async (e) => {
        e.preventDefault()
        await Client.post('users/create', {
            email: formData.email,
            first_name: formData.first_name,
            last_name: formData.last_name,
            username: formData.username,
            password: formData.password
        })
        .then((res) => {
            localStorage.setItem('username', formData.username)
            localStorage.setItem('user_id', res.data.id)
            Client.post('token/obtain/', {
                username: formData.username,
                password: formData.password
            }, {mode: "CORS"})
            .then(res => {
                Client.defaults.headers['Authorization'] = `JWT ${res.data.access}`
                localStorage.setItem('access_token', res.data.access)
                localStorage.setItem('refresh_token', res.data.refresh)
                navigate('/login')
                return res
            })
        })
        .catch(err => console.log(err))
        
    }
    return(
        <Card className='form signup-form' bg="dark" style={{ width: '18rem', color: 'white' }}>
            <Form onSubmit={handleSubmit}>
                Email: <input type='email' name='email' placeholder='Email'
                    value={formData.email} onChange={handleChange} />
                First name: <input type='text'
                    name='first_name' placeholder='First Name'
                    value={formData.first_name} onChange={handleChange} />
                Last name: <input type='text'
                    name='last_name' placeholder='Last Name'
                    value={formData.last_name} onChange={handleChange} />
                Username: <input type='text'
                    name='username' placeholder='Username'
                    value={formData.username} onChange={handleChange} />
                Password: <input type='password'
                    name='password' placeholder='Password'
                    value={formData.password} onChange={handleChange} />
                <button type='submit'>Register</button>
                <div className="form-footer">
                    <p>Have an account already?</p>
                    <a href='/login/'> Log-In </a>
                </div>
            </Form>
        </Card>
    )
}

export default Register