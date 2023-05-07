import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { searchingData } from '../features/user/userSlice';

function Navbar() {
  const [searchInput,setSearchInput] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
  //dispatch(searchingData(searchInput));
  }, [searchInput]);
  
  return (
    <>
<nav className="navbar navbar-expand-sm bg-body-tertiary">
  <div className="container-fluid">
   
    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
      <h2 className="navbar-brand">Re-CRUD</h2>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/"> Create Post</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/read">All Post</a>
        </li>
       
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" 
        value={searchInput}
        type="search" placeholder="Search"
        onChange={(e)=>(setSearchInput(e.target.value)) }
        aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar