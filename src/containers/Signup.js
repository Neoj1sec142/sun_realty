import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {setAlert} from '../actions/alert'
import { signup } from '../actions/auth';
import PropTypes from 'prop-types'

const Signup = ({setAlert, signup, isAuthenticated}) => {
  
  const navigate = useNavigate()
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  })
  useEffect(() => {
    if(isAuthenticated === true){
      navigate('/')
    }
  },[])
  const { name, email, password, password2} = formData;
  
  const onChange = e => setFormData({...formData, [e.target.name]: e.target.value})
  
  const onSubmit = e => {
    e.preventDefault()
    if(password !== password2){
      setAlert('Passwords do not match', 'error')
    }else{
      signup(name, email, password, password2)
      navigate('/login')
    }
  }
  
  return (
    <div className='auth'>
      <Helmet>
        <title>Sun Realty - Register</title>
        <meta name='description' content='login page'/>
      </Helmet>
      <h1 className='auth__title'>Sign Up</h1>
      <p className='auth__lead'>Create your Account!</p>
      <form className='auth__form' onSubmit={e=> onSubmit(e)}>
        <div className='auth__form__group'>
          <input className='auth__form__input' 
            type='name' 
            placeholder='name' 
            name='name' 
            value={name} 
            onChange={e=>onChange(e)} 
            required />
        </div>
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
        <div className='auth__form__group'>
          <input className='auth__form__input' 
            type='password' 
            placeholder='password2' 
            name='password2' 
            value={password2} 
            minLength='6'
            onChange={e=>onChange(e)} 
            required />
        </div>
        <button type='submit' className='auth__form__button'>Register</button>
      </form>
      <p className='auth__authtext'>Already have an account? <Link className='auth__authtext__link' to='/login'>Click Here</Link> to login.</p>
    </div>
  );
}


Signup.propTypes = {
  setAlert: PropTypes.func.isRequired,
  signup: PropTypes.func.isRequired,
  isAutheticated: PropTypes.bool
}

const mapStateToProps = state => ({
  isAutheticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, {setAlert, signup})(Signup);
