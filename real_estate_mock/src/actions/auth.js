import axios from 'axios'
import { setAlert } from './alert'
import {
    SIGNUP_SUCCESS, SIGNUP_FAIL,
    LOGIN_SUCCESS, LOGIN_FAIL,
    LOGOUT
} from './types'

export const login = (email, password) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const body = JSON.stringify({email, password})
    try{
        const res = await axios.post('http://localhost:8000/api/token/', body, config)
        console.log(res)
        // if(res.status == 200){}else{}
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        })
        dispatch(setAlert('Authenticated successfully', 'success'))
    }catch(err){
        dispatch({
            type: LOGIN_FAIL,
        })
        dispatch(setAlert('Error Autheticating', 'error'))
    }
} 

export const signup = (name, email, password, password2) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const body = JSON.stringify({name, email, password, password2})
    try{
        const res = await axios.post('http://localhost:8000/api/accounts/signup', body, config)
        // if(res.status == 200){}else{}
        dispatch({
            type: SIGNUP_SUCCESS,
            payload: res.data
        })
        dispatch(login(email, password))
    }catch(err){
        dispatch({
            type: SIGNUP_FAIL,
        })
        dispatch(setAlert('Error creating account', 'error'))
    }
}

export const logout = () => dispatch => {
    dispatch(setAlert('Logout Successful', 'success'))
    dispatch({
        type: LOGOUT
    })
}