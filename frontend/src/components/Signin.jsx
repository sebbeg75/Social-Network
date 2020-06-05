import React from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { notification } from 'antd';
import { login } from '../redux/action';


const Signin = () => {
    const history = useHistory();
    const connect = (event) => {
        event.preventDefault();
        const user = {
            email: event.target.email.value,
            password: event.target.password.value,
        }
        login(user)
            .then(() => {
                notification.success({ message: 'Usuario conectado éxito' });
                history.push('/')
            })
            .catch(err => {
                notification.error({message:'Usuario o contraseña incorrectos'})
                setTimeout(()=>{
                    history.push('./signin');
                      console.error(err)}
                )
            })

                
    };
    

    return (
        <div className='signin-container'>
            <div className='row px-3 vh-100'>
                <div className='col-md-4 mx-auto align-self-center'>

        <form className='signin-form' onSubmit={connect}>
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
                    placeholder='Introduce password'
                    type='password'
                />
            </div>    
            {/*login button*/}
            <div className='form-group'>
                <button type='submit' className='btn btn-primary btn-block'>
                    Sign In
                </button>
            </div>
            {/*already have account*/}
            <p className='text-center text-black'>
                 Dont`t have an account? <Link to='/signup'>Register here</Link>
            </p>
        </form>    
            </div>
        </div>
    </div>
    )
};

export default Signin;