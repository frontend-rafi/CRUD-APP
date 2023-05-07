import React, { useState } from 'react'
import {useDispatch} from "react-redux"
import {useNavigate} from 'react-router-dom'
import { createUser } from '../features/user/userSlice';
function Create() {
  const dispatch = useDispatch();
//! gettings inputs
  const [users,setUsers] = useState({});
const getUserData = (e)=>{
  setUsers({...users,[e.target.name] : e.target.value});
}

//! submit Function
const navigate  = useNavigate()
const handleForm =(e)=>{
e.preventDefault()
dispatch(createUser(users));
navigate("/read")
}

  return (
    <div>
<form onSubmit={handleForm}
className="mb-2 w-50 mx-auto form-expand-sm mt-5 " >
  <div >
    <label className="form-label">Name</label>
    <input type="text" 
 name = "name"
 placeholder="enter name"
    className="form-control"
    onChange={getUserData}
    />
   
  </div>
  <div className="mb-3">
    <label htmlFor='name'
    className="form-label">E-mail</label>
    <input type="email"
       placeholder="enter email" 
       onChange={getUserData}
     name = "email"
    className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">age</label>
    <input type="number" 
        placeholder="enter age"
       onChange={getUserData}
    name='age'
    className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="form-check">
  <input className="form-check-input"
     onChange={getUserData}
  type="radio" name="gender" value="Male" />
  <label className="form-check-label">
   Male
  </label>
</div>
<div className="form-check">
  <input className="form-check-input" 
   name="gender" value="Female"
     onChange={getUserData}
  type="radio" />
  <label className="form-check-label"
>
  Female
  </label>
</div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>
  )
}

export default Create
