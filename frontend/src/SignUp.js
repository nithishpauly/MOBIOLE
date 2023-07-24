import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
 import './signuppg.css';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const navigate = useNavigate();

  const handleName = (event) => {
    event.preventDefault();
    setName(event.target.value);
  };

  const handleEmail = (event) => {
    event.preventDefault();
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    event.preventDefault();
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrors(validateForm({ name, email, password }));
    try{
      const response=await axios.post('http://localhost:8181/api/v1/auth/register',{
        name:name,
        email:email,
        password:password
  
      });
      console.log(response.status);
      if(response.status===200){
        setName("");
        setEmail('');
        setPassword('');
  
        
  
      }
      
    }
    catch(error){
      alert(error);
      setIsSubmit(false);
  
    }
    if (isSubmit) {
      navigate('/home');
    }
  };

  const validateForm = (values) => {
    const errors = {};

    if (values.name.trim() === '') {
      errors.name = 'Username is required';
      setIsSubmit(false);
    }

    if (values.email.trim() === '') {
      errors.email = 'Email is required';
      setIsSubmit(false);
    }

    if (values.password.trim() === '') {
      errors.password = 'Password is required';
      setIsSubmit(false);
    } else if (values.password.length < 6) {
      errors.password = 'Password must be at least 6 characters long';
      setIsSubmit(false);
    }

    setIsSubmit(Object.keys(errors).length === 0);

    return errors;
  };

  return (
    <>
      <div className='login'><center>
        <form className='login_form' onSubmit={handleSubmit}>
          <br></br>
          <h1>Register</h1>
          <div className='gogo'>
            <div className='gogo'>
              <br></br>
              <label htmlFor='nm'>Username</label>
              <br />
              <input
                type='name'
                className='in'
                placeholder='username'
                value={name}
                id='nm'
                onChange={handleName}
              />
            </div>
            {errors.name}
          </div>
<div className="gogo">
          <div className='gogo'>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              className='in'
              placeholder='email'
              id='email'
              value={email}
              onChange={handleEmail}
            />
          </div>
          </div>
          {errors.email && <span>{errors.email}</span>}

          <div className='loginbox'>
            <div className="gogo">
            <div className='gogo'>
              <label htmlFor='pwd'>Password</label>
              <input
                type='password'
                className='in'
                placeholder='password'
                id='pwd'
                value={password}
                onChange={handlePassword}
              />
            </div>
            
            
            {errors.password && <span>{errors.password}</span>}
          </div>
          </div>

          <button
            type='submit'
            className='btn btn-secondary'
            style={{
              background: 'black',
              color: 'white',
              width: 180,
              height: 50,
              margin: 40,
            }}
          >
            Sign In
          </button>
        </form>
        </center>
      </div>
    </>
  );
};

export default SignUp;
