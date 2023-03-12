import React, {useEffect, useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { Helmet } from 'react-helmet-async';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { login } from '../actions/auth';

const Login = ({login, isAuthenticated}) => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const {email, password} = formData;
  const onChange = e => setFormData({...formData, [e.target.name]: e.target.value})
  const onSubmit = e => {
    e.preventDefault()
    login(email, password)
    navigate('/')
  }
  useEffect(() => {
    if(isAuthenticated === true){
      navigate('/')
    }
  },[])
  
  return (
    <div className='auth'>
      
      <Helmet>
        <title>Sun Realty - Login</title>
        <meta name='description' content='login page'/>
      </Helmet>
      <h1 className='auth__title'>Sign In</h1>
      <p className='auth__lead'>Sign into your Account!</p>
      <form className='auth__form' onSubmit={e=> onSubmit(e)}>
        <div className='auth__form__group'>
          <input className='auth__form__input' 
            type='email' 
            placeholder='email' 
            name='email' 
            value={email} 
            onChange={e=>onChange(e)} 
            required />
        </div>
        <div className='auth__form__group'>
          <input className='auth__form__input' 
            type='password' 
            placeholder='password' 
            name='password' 
            value={password} 
            minLength='6'
            onChange={e=>onChange(e)} 
            required />
        </div>
        <button className='auth__form__button'>Login</button>
      </form>
      <p className='auth__authtext'>Don't have an account? <Link className='auth__authtext__link' to='/signup'>Click Here</Link> to register.</p>
      
    </div>
  );
  
}

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, {login})(Login);
