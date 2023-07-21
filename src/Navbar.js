import React from 'react'
import { Link } from 'react-router-dom'
import Menu from './pages/menu.png'
const Navbar = () => {
    
  return (
    <div>
<nav style={{  borderBottomLeftRadius: "10px",borderBottomRightRadius:"10px"}} className="navbar navbar-expand-lg bg-linear-gradient(to right, #DECBA4, #3E5151)">
  <button style={{color:"white"}} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    
      <img style={{height:"40px",width:"50px", borderRadius:"8px"}} src={Menu} alt="" />
       
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav">
    <li className="nav-item">
        <Link className="nav-link" to="about">
          <img style={{height:"50px",width:'50px',borderRadius:"25px"}} src="/logo.png" alt="" />
          </Link> 
      </li>
      <li className="nav-item">
        <Link style={{fontSize:"25px",color:"white"}} className="nav-link" to="/">Home</Link> 
      </li>
      <li className="nav-item">
        <Link style={{fontSize:"25px",color:"white"}} className="nav-link" to="hirings">Jobs</Link> 
      </li>
     
      <li className="nav-item">
      <Link style={{fontSize:"25px",color:"white"}} className="nav-link" to="/internships">Internships</Link> 

      </li>
      <li className="nav-item">
        <Link style={{fontSize:"25px",color:"white"}} className="nav-link" to="about">About</Link> 
      </li>
    </ul>
  </div>
</nav>



    </div>
  )
}

export default Navbar