import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUser, showUser } from '../features/user/userSlice';
import CustomModal from './CustomModal';
import { Link } from 'react-router-dom';

function Read() {
  const {loading,users,searchInput} = useSelector(state=> state.app);

  const [showModal,setShowModal]= useState(false);
  const [radioData,setRadioData]= useState(""); 
  const [id,setId]= useState();
const dispatch = useDispatch();

useEffect(() => {
dispatch(showUser());
}, [])

if(loading){
  return <h2>Loading...</h2>
}

  return (
  <>
    {
      showModal && (
        <CustomModal showModal={showModal} setShowModal={setShowModal} id={id}/>
      )
    }
    <h2 className='w-50 mx-auto'>All Data</h2>
    <input className="form-check-input"
     onChange={(e)=> setRadioData(e.target.value)}
 type="radio" name="gender" checked={radioData === ""} />
  <label className="form-check-label">
  All
  </label>
  <input className="form-check-input"
   onChange={(e)=> setRadioData(e.target.value)}
 type="radio" name="gender" value="Male"
 checked={radioData === "Male"}
 />
  <label className="form-check-label">
Male
  </label>
  <input className="form-check-input"
 type="radio" name="gender" value="Female"
 onChange={(e)=> setRadioData(e.target.value)}
 checked={radioData === "Female"}
 />
  <label className="form-check-label">
Female
  </label>
    {
users && 
//! search func logic
users.filter((user)=>{
if (searchInput.length === 0) {
  return user;
} else {
  return user.name.toLowerCase().includes(searchInput.toLowerCase())
}
}).filter((user)=>{
  if (radioData === "Male") {
    return user.gender === radioData
  } else if(radioData === "Female") {
    return user.gender === radioData
  }else{
    return user;
  }
}).users?.map((user)=>{
return(
<div key={user.id} className="card mx-auto mt-5 mb-1" style={{width: "18rem"}}>
  <div className="card-body">
    <h5 className="card-title">{user.name}</h5>
    <h6 className="card-subtitle mb-2 text-body-secondary">{user.email}</h6>
    <p className="card-text"> {user?.age}</p>
    <p className="card-text"> {user.gender}</p>
    <button 
    onClick={()=> [setShowModal(true),setId(user.id)]}
    className="card-link">View</button>
    <Link to={`/edit/${user.id}`}
     className="card-link">Edit</Link>
    <button onClick={()=> dispatch(deleteUser(user.id))}
    className="card-link">Delete</button>
  </div>
</div>
)
})
    }
    
    </>
  )
}

export default Read