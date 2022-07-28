import React  from "react";
import './body.css';
import image1 from '../../Assets/Images/inkomezabigwi.webp';


class Body extends React.Component {
    render() {
        return (

                <div className="content">
                    
                    <div className="textbox">
                        <h2>Welcome To <h1><span>URUGERERO</span></h1> <h3>platform</h3></h2>
                        {/* <p>Figures show that districts have saved billions in Francs over the last five years thanks to the National Service Programme (Urugerero), 
                            under which high school graduates carry out development activities during their holidays.
                            Urugerero, a concept borrowed from an ancient Rwandan tradition, 
                            has seen tens of thousands of youths not only take crucial civic education lessons, 
                            but also physically help in the construction of basic infrastructure and provision of socioeconomic services.
                        </p> */}
                    <div className="buttons">
                        <a href="#" className="signin" >Sign In</a>
                        <a href="#" className="signup" >Sign Up</a>
                    </div>
                    </div>
                    <div className="cercle"></div>
                    <div className="imgbox">
                        <img src={image1} alt="" className="inkomezi"/>
                    </div>
                </div>
            

        )
    }
}
export default Body;