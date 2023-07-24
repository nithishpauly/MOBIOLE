// import React, { useState } from 'react'
// import './loginsignup.css'
// import { Link } from 'react-router-dom';
// import axios from 'axios';
// function Loginsignup({ onClick }) {
  
//   const [name,setname]=useState("");
//   const[email,setemail]=useState("");
//   const[password,setpassword]=useState("");
//   const[conpassword,setconpassword]=useState("");

//   const SubmitHandler =(e)=>
//   {
//     e.preventDefault();
//     const data =
//     {
//         name:name,
//         email:email,
//         password:password,
//         con_password:conpassword
//     };
//   axios.post('http://localhost:8085/post',data);  
//   alert("Registered successfully")

//   }
//   const [isSliderMoved, setSliderMoved] = useState(false);
//   const [isFormSectionMoved, setFormSectionMoved] = useState(false);

//   const handleSignupClick = () => {
//     setSliderMoved(true);
//     setFormSectionMoved(true);
//   };

//   const handleLoginClick = () => {
//     setSliderMoved(false);
//     setFormSectionMoved(false);
//   };
//   const handleCancelClick = () => {
//     onClick();
//   };

//   return (
//     <div>
//     <div id="booody">
//     <div className='bod5'>
  
//     <div className='bod4'>
//       <div className="container" style={{marginLeft:"0cm",marginTop:"2cm"}}>
//         <div className="btn11">
//           <button type='submit'className="login" onClick={handleLoginClick}>
//             Login
//           </button>
//           <button type='submit'className="signup" onClick={handleSignupClick}>
//             Signup
//           </button>
//         </div>

//         <div
//           className={`slider ${isSliderMoved ? 'moveslider' : ''}`}
//         ></div>
//         <div
//           className={`form-section ${isFormSectionMoved ? 'form-section-move' : ''
//             }`}
//         >
        
//           <div className="login-box">
//             <input
//               type="email"
//               className="email ele"
//               placeholder="Email@example.com"
//               required
//             />
//             <input
//               type="password"
//               className="password ele"
//               placeholder="password"
//             />
//             <div className='cc'>
//             <button type='submit'className="clkbtn">Login</button>
//             <button className="clkbtn" onClick={handleCancelClick}>Cancel</button>
//             </div>
//             <div>
//             <Link to="sidepannel" ><button style={{backgroundColor:"black",color:"white",width:"5cm",height:"1.5cm",fontSize:"0.5cm",borderRadius:"1cm",cursor:"pointer"}} type="submit">AdminLogin</button></Link>
           
//             </div>
//             </div>


            
//             <form className="signup-box">
//             <input
//             type="text"
//             className="name ele"
//             placeholder="Enter your name"
//             onChange={(e) => setname(e.target.value)}
//             />
//             <input
//               type="email"
//               className="email ele"
//               placeholder="Email@example.com"
//               onChange={(e) => setemail(e.target.value)}
//               />
//             <input
//               type="password"
//               className="password ele"
//               placeholder="password"
//               onChange={(e) => setpassword(e.target.value)}
//               />
//               <input
//               type="password"
//               className="password ele"
//               placeholder="Confirm password"
//               onChange={(e) => setconpassword(e.target.value)}
//             />
//             <div className='cc'>
//             <button type='submit'className="clkbtn" onClick={SubmitHandler}>Signup</button>
//               <button type='submit'className="clkbtn" onClick={handleCancelClick} >Cancel</button>
//               </div>
//               </form>
              
//               </div>
//               </div>
//           </div>
//     </div>
    
//     </div>
    
//               </div>
//               );
//             }

// export default Loginsignup;
import React from 'react'
import { useState,useEffect } from 'react'
import { redirect, useNavigate } from 'react-router-dom'
import './loginsignup.css'
import axios from 'axios'
import { useDispatch } from "react-redux";

import { Link } from 'react-router-dom'



const Login = () => {
 const [name,setName]=useState('')
 const [id,setId]=useState('')  
 const [password,setPassword]=useState('')
 const [errors, setErrors] = useState({});
 const[isSubmit,setIsSubmit]=useState(false);
 const navigate =useNavigate();
 const dispatch=useDispatch();

 const handleName=(event)=>{
    event.preventDefault();
    setName(event.target.value)
  }
 
  const handleId=(event)=>{
    event.preventDefault();
    setId(event.target.value)
  }
  const handlePassword=(event)=>{
    event.preventDefault();
    setPassword(event.target.value)
  }
  const handleSubmit=async (event)=>{
    event.preventDefault();
    setErrors(validateForm({name,id,password}));
    try{
      const response=await axios.post('http://localhost:8181/api/v1/auth/authenticate',{
        
        email:name,
        password:password
  
      });
      navigate('/Home');
      let token=response.data.token;
      localStorage.setItem('token',token);
      console.log(response.status);
      if(response.status===200){
        setName("");
        setId('');
        setPassword('');
  
        
  
      }
      
    }
    catch(error){
      console.log(error);
      setIsSubmit(false);
  
    }
    // setIsSubmit(true);
    
    
   
};
  

  const validateForm = (values) => {
    const errors = {};

    if (values.name.trim() === '') {
      errors.name = 'Email is required';
      setIsSubmit(false);
    }

    else if (values.password.trim() === '') {
      errors.password = 'Password is required';
      setIsSubmit(false);
    } else if (values.password.length < 6) {
      errors.password = 'Password must be at least 6 characters long';
      setIsSubmit(false);
    }
    else{
        setIsSubmit(true)
    }
    return errors;

    // setErrors(errors);
  };

  

  return (
    <>
  
    <div className='login'>
        <form className='login_form' onSubmit={handleSubmit}>
            <h1>Login</h1>
            <div className='gogo'>
            <div className='form-floating mb-3'>
            <label for='nm'>Email</label>
            <br></br>
            <input type='email' className='form-control'
            placeholder='abc@gmail.com'
            value={name} id='nm'
            onChange={handleName} />
            </div>
            {errors.name}
            </div>

            <div className='loginbox'>
              <div className="jo">
            <div className='form-floating mb-3'>
            <label for='pwd'>Password</label>
            <input type='password' className='form-control'
            placeholder='password' id='pwd'
            value={password}
            onChange={handlePassword}/>
            </div>
            </div>
            {errors.password && <span>{errors.password}</span>}
            </div>
            
            <button  type='submit' className='btn btn-secondary' style={{background:'black',color:'white',width:180,height:50,margin:40}}>Sign In</button>

        </form>
        <br></br><br></br>
        <h2>Don't have an account? <a href='/SignUp'>SignUp</a></h2>
    </div>
    
    </>
  )
}

export default Login

