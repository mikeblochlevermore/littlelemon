import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'

function Footer () {
    return (
     <footer className="footer">
        <div>
          <h4>BUSINESS HOURS</h4>
        </div>
        <div>
          <p>Mon-Thurs <br></br> 11-16 <br></br><br></br>Fri, Sat, Sun<br></br>10-23</p>
        </div>
        <div>
          <h4>CONTACT US</h4>
        </div>
        <div>
          <p>Street Name</p>
          <p>Number</p>
          <p>District</p>
          <br></br>
          <p>+1 234 567 890</p>
          <p>littlelemon@email.com</p>
        </div>
        <div className="social-icons">
          <a href="/"><FontAwesomeIcon icon={faFacebook} /></a>
          <br></br>
          <a href="/"><FontAwesomeIcon icon={faInstagram} /></a>
        </div>
     </footer>
    );
  };

  export default Footer;
