import React  from "react";
import { Link } from "react-router-dom";
import './navbar.css';

class Navbar extends React.Component {

    render() {
        return (
            <div className="container1">
                <div className="logo">
                    <h2 className="text1">URUGERERO<a className="text0">platform</a> </h2>
                    <h5 className="text2">Connect Rwandan Youth.</h5>

                </div>
                

                <div className="search-bar">
                    <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.0/css/line.css"/>
                    <i class="uil uil-search"></i>
                    <input type="search" placeholder="Search for District" className="search"/>

                </div>

                <section id='' className='navigation'>
                        <ul id="menubar">
                            <li> <Link to="/">Home</Link></li>
                            <li> <Link to="/aboutus">About Us</Link></li>
                            <div className="sign">
                                <li><a >|</a></li>
                                <li> <a href="#">Sign In</a></li>
                                
                                <li> <a href="#">Sign Up</a></li>
                            </div>
                        </ul>
                    </section>

            </div>

        )
    }
}
export default Navbar;