import React, { useState } from 'react'
export const Header = (props) => { 
  const [search, setSearch]=useState("");
  const searched = (e) => { 
    e.preventDefault();
    // props.searching(search);
    console.log("search was pressed "+ search);
    props.searching(search);
    
  } 
  return (
    <> 
    <nav className="navbar navbar-expand-lg bg-dark " data-bs-theme="dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Weather App</a>
    <button className="navbar-toggler bg-success" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li> 
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">About Us</a></li>
            <li><a className="dropdown-item" href="#">Infrigment Copyrights</a></li> 
          </ul>
        </li>   
      </ul>
    </div>
      <form className="d-flex" onSubmit={searched} >
        <input className="form-control me-2" type="text" onChange={(e)=> setSearch(e.target.value)} placeholder="Enter The Place"  />
        <button className="btn btn-outline-success" id="search" type="submit" >Search</button>
      </form>
  </div>
</nav>
    </>
  )
}
export default Header
 