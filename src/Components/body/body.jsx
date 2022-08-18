import React  from "react";
import './body.css';
import { Link } from "react-router-dom";
import image1 from '../../Assets/Images/undraw_team_collaboration_re_ow29.png';

function Body() {
  return (
  <div className="main-body">
    <div className="textbox">
      <h3>The day-to-day <br /> 
        activities of community <br />
        policy initiative
      </h3>

      
        <Link to="/aboutus" className="signup2">Learn More</Link>
      
    </div>
      <div className="imgbox">
        <img src={image1} alt="" className=""/>
      </div>
   </div>
  )
}

export default Body