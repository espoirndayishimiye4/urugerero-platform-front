import React from "react";
import Navbar from "../NavBar/navbar";
import Footer from "../footer/footer";
import "./signin.css";
import { Link } from "react-router-dom";
import image1 from '../../Assets/Images/undraw_Authentication_re_svpt.png';

class SignIn extends React.Component {
  render() {
    return (
      <section className="information">
        <Navbar />
          <div className="cont1">
                <div className="imgbox">
                  <img src={image1} alt="" className=""/>
               </div>
                <form className="cover">
              <h1>Login</h1>
              
                <input type="email" className="input" placeholder='email' required onChange/>
                <input type="password" className="input" placeholder='password'required onChange/>
                <button className="signin-btn">Sign In</button>
              
              <p className="link">
              <li>{" "}<Link to="/signup" className="signup"><a>Forgot password ? </a> or <a href="#">Sign up</a></Link></li>

            </p>
              
            </form>
          </div>
        <Footer />
      </section>
    );
  }
}
export default SignIn;
