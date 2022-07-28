import React from "react";
import Navbar from "../NavBar/navbar";
import Footer from "../footer/footer";
import "./signin.css";

class SignIn extends React.Component {
  render() {
    return (
      <section className="information">
        <Navbar />
          <div className="cont1">
            <form className="form-horizontal">
              <div className="inputbutton">
                <input type="email" className="form-control" placeholder='email' required onChange/>
                <input type="password" className="pwd" placeholder='password'required onChange/>
                <button className="btn">Sign In</button>
              </div>
              <p className="link">
              <a href="#">Forgot password ? </a> or <a href="#">Sign up</a>
            </p>
              
            </form>
          </div>
        <Footer />
      </section>
    );
  }
}
export default SignIn;
