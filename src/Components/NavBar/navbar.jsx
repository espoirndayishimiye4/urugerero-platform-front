import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./navbar.css";

function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false)
  const handleToggle = () => {
    setNavbarOpen(!navbarOpen)
  }
  return (
    <div className="header">

      <div className="logo">
        <h2>URUGERERO<em>platform</em></h2>
        <h5>Connect Rwandan Youth</h5>
      </div>
        
      <div className="navBar">
          <ul className={`menuNav ${navbarOpen ? " showMenu" : "closeMenu"}`}>
             <li>{" "}<Link to="/">Home</Link></li>
             <li>{" "}<Link to="/aboutus">About Us</Link></li>
             <li>{" "}<Link to="/signin">Sign In</Link></li>
             <li>{" "}<Link to="/signup">Sign Up</Link></li>   
           </ul>
      </div>
      <button className="btn" onClick={handleToggle}>{navbarOpen ? <FaTimes/> : <FaBars/> } </button>      
    </div>
  )
}
export default Navbar
