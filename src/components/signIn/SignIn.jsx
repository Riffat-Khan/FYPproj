import React, { useState } from 'react'

import './SignIn.css'

import axios from 'axios'

import { Link } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';

import Validation from './signInValidation';

import  GoogleIcon  from '@mui/icons-material/Google';
import  FacebookIcon  from '@mui/icons-material/Facebook';

function Sign() {

    const [VALUES, setValues] = useState({
        name : '',
        password : ''
    });

    // const [errors, setErrors] = useState({});

    // const navigate = useNavigate();

    const handleInput = (event) => {
        setValues((prev) => ({...prev, [event.target.name] : [event.target.value]}));

    }

    const handleClick = (event) => {
        event.preventDefault();
        // setErrors(Validation(VALUES));

        axios.post('http://localhost:3030/signin', VALUES)
        .then(res => {
            if(res.data.Status === 'Success') {
                // navigate('/')
                console.log('LogedIn Successfully',)
            }
            else console.log('Wrong')
            // else alert('Error');
        })
        .catch(err => console.log(err));
    }




  return (

    <div>
        <div className='container'>

            <div className='leftCol'>
                <h1>LogIn</h1>

                <input type="email" name = 'email' placeholder="Email" onChange={handleInput} />
                {/* {errors.email && <span>{errors.email}</span>} */}
                <input type="password" name = 'password' placeholder="Password" onChange={handleInput}  />
                {/* {errors.password && <span>{errors.password}</span>} */}
                <button onClick={handleClick} >LogIn</button>
            </div>

            <div className='rightCol'>
                <h2>Welcome Back!</h2>
                <p>Continue your Profile and see where you left!</p>
                <p>Don't have an account?</p>
                {/* <Link to = '/signup' >Click Here!</Link> */}
            </div>

        </div>
    </div>

  )
}

export default Sign
