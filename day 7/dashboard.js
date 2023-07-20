import React from 'react'
import { useSelector,useDispatch } from "react-redux";
import { actions } from "../store/index";


function Dashboard  () {
  const counter = useSelector((state) => state.counter);
 const dispatch = useDispatch();
 const increment = () =>{
dispatch(actions.increment());
 };
 const decrement = () =>{
dispatch(actions.decrement());
 };
 
  return (
    <div className='flex justify-center items-center text-3xl text-white h-full'>
     <div>
      
       
      </div>
  
    <div>
    
    
    
    <login />
    <h2>{counter}</h2>
    <button onClick={increment} >Increment</button>
    <button onClick={decrement}>Decrement</button>
    
    </div>
  
    </div>
  )
}

export default Dashboard