import React , { useState } from 'react'

import Validation from './signUpValidation'

import { Link } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';

import './SignUp.css'
import axios from 'axios'

// import  GoogleIcon  from '@mui/icons-material/Google';
// import  FacebookIcon  from '@mui/icons-material/Facebook';

function SignUp() {

    const [VALUES, setValues] = useState({
        name : '',
        email : '',
        password : ''
    })

    // const [errors, setErrors] = useState();

    // const navigate = useNavigate();

    // axios.defaults.withCredentials = true;

    const handleInput = (event) => {
        setValues((prev) => ({...prev, [event.target.name] : [event.target.value]}));

    }

    const handleClick = (Event) => {

        Event.preventDefault();
        // setErrors(Validation(VALUES));

        axios.post('http://localhost:3030/signup', VALUES)
            .then(res => console.log('Registered Successfully',))
            .catch(err => console.log(err));
    }

    
        // axios.post('http://localhost:3030/signup', VALUES)
        // .then(res => {
        //     if(res.data.Status === 'Success') {
        //         // navigate('/')
        //         console.log('LogedIn Successfully',)
        //     }
        //     // else alert('Error');
        // })
        // .catch(err => console.log(err));


        // if(errors.name === "" && errors.email === "" && errors.password === ""){

            // axios.post('http://localhost:3030/signup', VALUES)
            // .then(res => console.log('Registered Successfully',))
            // .catch(err => console.log(err));

        // }

  return (

    <div>
        <div className="container">

            <div className='left'>
                <h2>Welcome Back!</h2>
                <p>Continue your Profile and see where you left!</p>
                <p>Already have and account?</p>
                {/* <Link to = '/signin'>Click Here!</Link> */}
            </div>

            <div className='right'>
                <h1>Register Your Account</h1>
                <input type="text" name = 'username'  placeholder="Username" onChange = {handleInput}/>
                {/* {errors.username && <span>{errors.username}</span>} */}
                <input type="email" name = 'email' placeholder="Email" onChange = {handleInput}/>
                {/* {errors.email && <span>{errors.email}</span>} */}
                <input type="password" name = 'password' placeholder="Password"  onChange = {handleInput}/>
                {/* {errors.password && <span>{errors.password}</span>} */}
                <input type="password" placeholder="Confirm Password"  />
                <button onClick = {handleClick}>Sign Up</button>
            </div>
        </div>
    </div>
  )
}

export default SignUp
