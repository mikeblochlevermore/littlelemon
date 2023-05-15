import { Link } from "react-router-dom";

function About () {
  return (
   <article className="section">
                <div className="about">
                    <img className="about-img" src={require("./assets/Mario and Adrian A.jpg")} alt="owners" />
                </div>
                <div className="about-txt">
                    <h1 className="title">MARIO & ADRIAN</h1>
                    <button><Link to="/About">Meet The Founders</Link></button>
               </div>
  </article>
  );
};

export default About;
