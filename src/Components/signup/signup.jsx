import React from "react";
import Navbar from "../NavBar/navbar";
import Footer from "../footer/footer";
import "./signup.css";
import image1 from '../../Assets/Images/undraw_Access_account_re_8spm.png';

class SignUp extends React.Component {
  render() {
    return (
      <section className="info">
        <Navbar />
          <div className="cont2">
                <div className="imgbox">
                  <img src={image1} alt="" className=""/>
               </div>
                <form className="cover2">
              <h1>Sign Up</h1>
                <input type="name" className="input" placeholder='Full Name' required onChange/>
                <input type="email" className="input" placeholder='Email' required onChange/>
                <input type="phone number" className="input" placeholder='Phone Number' required onChange/>
                <input type="sector" className="input" placeholder='Sector'required onChange/>
                <button className="next-btn">Next</button>
              
              <p className="link">
              <a href="#">Check Again Your Information ? </a>
            </p>
              
            </form>
          </div>
        <Footer />
      </section>
    );
  }
}
export default SignUp;
