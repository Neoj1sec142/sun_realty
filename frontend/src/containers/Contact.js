import React, {useState, useEffect} from 'react'
import { Helmet } from 'react-helmet-async';
import axios from 'axios'
import { connect } from 'react-redux';
import {setAlert} from '../actions/alert'
import {Oval} from 'react-loader-spinner'

const Contact = ({setAlert}) => {
  useEffect(() => {
    window.scrollTo(0,0)
  },[])

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const { name, email, subject, message } = formData;    

  const [loading, setLoading] = useState(false)

  const onChange = e => setFormData({...formData, [e.target.name]: e.target.value})
  const onSubmit = e => {
    e.preventDefault()
    axios.defaults.headers = {
        'Content-Type': 'application/json',
        // 'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
    setLoading(true)
    axios.post('http://localhost:8000/api/contacts', {name, email, subject, message})
    .then(res => {
        setAlert('Message Sent', 'success')
        setLoading(false)
        window.scrollTo(0,0);
    })
    .catch(err => {
        setAlert('Error Sending Message', 'error')
        setLoading(false)
        window.scrollTo(0,0)
    })
  }

  return (
    <div className='contact'>
      <Helmet>
        <title>Sun Realty - Contact</title>
        <meta name='description' content='Contact Us'/>
      </Helmet>
      <form className='contact__form'>
        
      </form>
    </div>
  );
}

export default connect(null, {setAlert})(Contact);
