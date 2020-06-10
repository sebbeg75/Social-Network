import React from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { notification } from 'antd';
import { Link } from 'react-router-dom';
import './Signup.scss';


const Signup = () => {
    const history = useHistory()
    const connect = (event) => {
        event.preventDefault();
        const user = {
            name: event.target.name.value,
            email: event.target.email.value,
            password: event.target.password.value,
        }
        axios.post('http://localhost:8000/api/users/register', user)
            .then(res => {
                notification.success({ message: 'User successfully created, please sign in' });
                history.push('/signin')
            })
            .catch(console.error)
    }

    return ( 
        <div className='signup-container'>
            <div className='row px-3 vh-100 w-100'>
                <div className='col-md-4 mx-auto align-self-center'>
                        
        <form className='signup-form' onSubmit={connect}>
            {/*username*/}
            <div className='form-group input-group'>
                <div className='input-group-prepend'>
                    <span className='input-group-text'>
                        <i className='fa fa-user'></i>
                    </span>
                </div>
                <input
                    name='name'
                    className='form-control'
                    placeholder='Username'
                    type='text'
                  
                />
            </div>
            {/*email*/}
            <div className='form-group input-group'>
                <div className='input-group-prepend'>
                    <span className='input-group-text'>
                        <i className='fa fa-envelope'></i>
                    </span>
                </div>
                <input
                    name='email'
                    className='form-control'
                    placeholder='Email address'
                    type='email'
                   
                />
            </div>
            {/*password*/}
            <div className='form-group input-group'>
                <div className='input-group-prepend'>
                    <span className='input-group-text'>
                        <i className='fa fa-lock'></i>
                    </span>
                </div>
                <input
                    name='password'
                    className='form-control'
                    placeholder='Create password'
                    type='password'
                    
                />
            </div>
            {/*register button*/}
            <div className='form-group'>
                <button type='submit' className='btn btn-primary btn-block'>
                    Sign Up
                </button>
            </div>
            {/*already have account*/}
            <p className='text-center text-black'>
                Have an account? <Link to='/signin'>Sign In</Link>
            </p>
        </form>
                </div>
            </div>
        </div>
    )

};
export default Signup;