import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { updateUserData } from '../features/user/userSlice';
function Update() {
  const {id} = useParams();
  const naviagte = useNavigate()
  const dispatch = useDispatch();
  const {users} = useSelector(state => state.app);
  //store prev data
const [updateUsers,setUpdateUsers]= useState("");

useEffect(() => {
if(id){
  const singleUser = users.filter((user)=> user.id === id);
setUpdateUsers(singleUser[0]);
}
}, []);


//! new data for update
const newData= (e)=>{
setUpdateUsers({...updateUser, [e.target.name]: e.target.value})
}
const handleUpdate = (e)=>{
e.preventDefault();
dispatch(updateUserData(updateUsers))
naviagte("/read")
}
  return (
    <>
    <form 
    onSubmit={handleUpdate}
    className="mb-2 w-50 mx-auto form-expand-sm mt-5 " >
      <div >
        <label className="form-label">Name</label>
        <input type="text" 
     name = "name"
     placeholder="enter name"
        class="form-control"
        onChange={newData}
        value={updateUsers && updateUsers.name}
        />
       
      </div>
      <div className="mb-3">
        <label htmlFor='name'
        className="form-label">E-mail</label>
        <input type="email"
           placeholder="enter email" 
           onChange={newData}
          value={updateUser && updateUser.email}
         name = "email"
        className="form-control" id="exampleInputPassword1"/>
      </div>
      <div className="mb-3">
        <label for="exampleInputPassword1" className="form-label">age</label>
        <input type="number" 
            placeholder="enter age"
            onChange={newData}
          value={updateUser && updateUser.age}
        name='age'
        className="form-control" id="exampleInputPassword1"/>
      </div>
      <div className="form-check">
      <input className="form-check-input"
        onChange={newData}
       checked={updateUser && updateUser.gender === "Male"}
      type="radio" name="gender" value="Male" />
      <label className="form-check-label">
       Male
      </label>
    </div>
    <div className="form-check">
      <input className="form-check-input" 
       name="gender" value="Female"
       onChange={newData}
        checked={updateUser && updateUser.gender === "Female"}
      type="radio" />
      <label className="form-check-label"
    >
      Female
      </label>
    </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
        </>
  )
}

export default Update