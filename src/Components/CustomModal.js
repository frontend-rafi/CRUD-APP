import React from 'react'
import "./CustomModal.css";
import { useSelector } from 'react-redux';
function CustomModal({showModal,id,setShowModal}) {
const allUsers = useSelector(state => state.app.users);
const singleUser = allUsers.filter((user)=> user.id === id);


  return (
    <>
    <div className='modalBgc'>
    <div className='modalCont'>
        <button onClick={()=> setShowModal(false)}>X</button>
<h2><span>Name</span> : {singleUser[0].name}</h2>
<h3><span>Email :</span> {singleUser[0].email}</h3>
<h4><span>age :</span> {singleUser[0].age}</h4>
<h5> <span>Gender :</span> {singleUser[0].gender}</h5>
</div>
    </div>

    </>
  )
}

export default CustomModal