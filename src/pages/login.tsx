import React from 'react'
import { useAppDispatch,useAppSelector } from '../components/hooks'
import { setName,setEmail,setPassword,reset } from '../components/loginSlice'
import { removeFromLocalStorage } from '../localStorage/store'

const UserForm=()=>{
    const dispatch=useAppDispatch();
    const user=useAppSelector((state)=>state.login)

    const handleReset=()=>{
        dispatch(reset());
        removeFromLocalStorage();
    }


  return (
    <div>
      <input type='text' value={user.name} onChange={((e)=>{dispatch(setName(e.target.value))})}/>
      <input type='email' value={user.email} onChange={((e)=>{dispatch(setEmail(e.target.value))})}/>
      <input type="password" value={user.password} onChange={((e)=>{dispatch(setPassword(e.target.value))})}/>
      <button onClick={handleReset}>Reset</button>

      <p>Name:{user.name}<br/>
      Email:{user.email}<br/>
      Password:{user.password}</p>

    </div>
  )
}

export default UserForm;
