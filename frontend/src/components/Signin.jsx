import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { showErrorMsg } from '../helpers/message';
import { showLoading } from '../helpers/loading';
import isEmpty from 'validator/lib/isEmpty';
import isEmail from 'validator/lib/isEmail';
import { signin } from '../api/auth';

const Signin = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        errorMsg:false,
        loading: false,
        redirectToDashboard: false,
    });

    const {
        email, 
        password, 
        errorMsg, 
        loading,
        redirectToDashboard,
        } = formData;

        /* Event Handlers */

        const handleChange = (evt)=> {
            setFormData({
                ...formData,
                [evt.target.name]: evt.target.value,
                errorMsg: '',
            });
         };

         const handleSubmit = (evt) => {
            evt.preventDefault();

            //client side validation
            if ( 
            isEmpty(email) || 
            isEmpty(password)
            ){
                setFormData({
                    ...formData, 
                    errorMsg: 'All fields are required',
                });
            } else if (!isEmail(email)) {
                setFormData({
                    ...formData,
                    errorMsg: 'Invalid email',
                });
            } else {
                const { email, password } = formData;
                const data = { email, password };

                setFormData({ ...formData, loading: true});

                signin(data)         
        }
    };
            
    /* Views */

    const showSigninForm = () => (
        <form className='signup-form' onSubmit={handleSubmit} noValidate>
            {/*email*/}
            <div className='form-group input-group'>
                <div className='input-group-prepend'>
                    <span className='input-group-text'>
                        <i className='fa fa-envelope'></i>
                    </span>
                </div>
                <input
                    name='email'
                    value={email}
                    className='form-control'
                    placeholder='Email address'
                    type='email'
                    onChange={handleChange}
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
                    value={password}
                    className='form-control'
                    placeholder='Create password'
                    type='password'
                    onChange={handleChange}
                />
            </div>    
            {/*login button*/}
            <div className='form-group'>
                <button type='submit' className='btn btn-primary btn-block'>
                    Signin
                </button>
            </div>
            {/*already have account*/}
            <p className='text-center text-white'>
                 Dont`t have an account? <Link to='/signup'>Register here</Link>
            </p>
        </form>
    );

    /* Renderer */

    return ( 
        <div className='signin-container'>
            <div className='row px-3 vh-100'>
                <div className='col-md-5 mx-auto align-self-center'>
                    {errorMsg && showErrorMsg(errorMsg)}
                    {loading && (
                        <div className='text-center pb-4'>{showLoading()}</div>)}
                    {showSigninForm()}
                </div>
            </div>
        </div>
    )
};

export default Signin;