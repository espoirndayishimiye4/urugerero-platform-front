import React  from "react";
import Navbar from "../NavBar/navbar";
import Footer from "../footer/footer";
import './aboutus.css';

class AboutUs extends React.Component {
    render() {
        return (
            <section className="all-information">
            <Navbar/>
                
                    <div className="about-1">
                        <h1>ABOUT US</h1>
                        <p>The ITORERO programme is attended by all youths in Rwanda who are aged between 18-35 and have completed secondary education and later when this programme ends, 
                            they join the Urugerero programme which is done on a sector level to now put in action the skills learnt. 
                            The biggest percentage of these youths are not interested in watching news to know what is happening in the other sectors, 
                            because activities happening there are always broadcasted in the news.
                        </p>
                    </div>
                <div className="space-left-right">
                    <div id="about-2">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="about-item">
                                    <i className="fa fa-book">
                                        <h3>MISSION</h3>
                                        <hr />
                                        <p>The ITORERO programme is attended by all youths in Rwanda who are aged between 18-35 and have completed secondary education and later when this programme ends, 
                                            they join the Urugerero programme which is done on a sector level to now put in action the skills learnt. 
                                            The biggest percentage of these youths are not interested in watching news to know what is happening in the other sectors, 
                                            because activities happening there are always broadc
                                        </p>
                                    </i>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="about-item">
                                    <i className="fa fa-globe">
                                        <h3>VISSION</h3>
                                        <hr />
                                        <p>The ITORERO programme is attended by all youths in Rwanda who are aged between 18-35 and have completed secondary education and later when this programme ends, 
                                            they join the Urugerero programme which is done on a sector level to now put in action the skills learnt. 
                                            The biggest percentage of these youths are not interested in watching news to know what is happening in the other sectors, 
                                            because activities happening there are always broadc
                                        </p>
                                    </i>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="about-item">
                                    <i className="fa fa-pencile">
                                        <h3>ACHIVEMENTS</h3>
                                        <hr />
                                        <p>The ITORERO programme is attended by all youths in Rwanda who are aged between 18-35 and have completed secondary education and later when this programme ends, 
                                            they join the Urugerero programme which is done on a sector level to now put in action the skills learnt. 
                                            The biggest percentage of these youths are not interested in watching news to know what is happening in the other sectors, 
                                            because activities happening there are always broadc
                                        </p>
                                    </i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
               
            </section>
            
        )
    }
}
export default AboutUs ;