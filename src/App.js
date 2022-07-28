import React from "react";
import "./App.css";
import Logo from "./image/Logo.jpeg"
import email from "./image/email.jpg"
import Lock from "./image/Lock.jpg"



function App() {
  return (
    <div className="main">
      <div className="sub-main">
        <div>
          <div className="imgs">
          <span>Urugerero Platform</span>
            <div className="container-image">
              

            </div>

          </div>
          <div>
            <h1>login page</h1>
            <div>
            <img src={email} alt="email" className="email"/>
            <input type="text" placeholder="email" className="name"/>
            </div>

            <div className="second-input">
            <img src={Lock} alt="Lock" className="Lock"/>
            <input type="password" placeholder="password" className="name"/>
            </div>
            <div className="login-button">
            <button>Login</button>
            </div>

           

            <p className="link">
              <a href="#">Forgot password ? </a> or <a href="#">Sign up</a>
            </p>
          </div>
        </div>

      </div>
    </div>
  )
    
  
}

export default App;
