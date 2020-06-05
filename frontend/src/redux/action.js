import axios from 'axios';
import store from './store';
//import { API_URL } from '../api-config'

export const login = async(user) => {
    console.log(user)
    const res = await axios.post('http://localhost:8000/api/users/login', user);

    store.dispatch({ 
        
        type: 'LOGIN',
        payload: res.data.user
    });
    localStorage.setItem('authToken','Bearer ' + res.data.user.token);
}