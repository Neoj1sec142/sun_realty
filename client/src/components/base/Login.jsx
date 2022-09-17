import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import Client from '../../services/api'

const Login = ({setLogin}) => {
    const navigate = useNavigate()
    const [form, setForm] = useState({ username: '', password: '' })
    
    const handleChange = (e) => {setForm({...form, [e.target.name]: e.target.value})}

    const handleLogin = async (e) => {
        e.preventDefault()
        await Client.post('token/obtain/', {
            username: form.username,
            password: form.password
        })
        .then(res => {
            if(res.status === 200){
                Client.defaults.headers['Authorization'] = `JWT ${res.data.access}`
                localStorage.setItem('access_token', res.data.access)
                localStorage.setItem('refresh_token', res.data.refresh)
            }else{return res}
        })
        .then(res => {
            Client.get(`users/${form.username}`)
            .then(res => {
                localStorage.setItem('user_id', res.data.id)
                localStorage.setItem('username', form.username)
                navigate('/main')
            })
        })
        .catch(err => console.log(err, "Login Err"))
    }

    return(
        <div className='container'>
            <br></br>
            <form className='form-group' onSubmit={handleLogin}>
                <br></br>
                <input className='form-control' 
                        name='username'
                        type='text'
                        onChange={handleChange}
                        placeholder='email'/>
                
                
                <input className='form-control' 
                        name='password'
                        type='password'
                        onChange={handleChange}
                        placeholder='password'/>
                <br></br>
                {form.password !== '' 
                ? <button type='submit' className='btn btn-outline-dark'>Register Account</button>
                : <button type='submit' disabled className='btn btn-outline-dark'>Register Account</button>}
                <br></br>
                <p className='text-muted'>Don't have an account <a href='/register' >Click Here</a> to register.</p>
            </form>
        </div>
    )
}

export default Login