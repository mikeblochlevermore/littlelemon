import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons'

function Testimonials () {
    return (
     <article className="section">
        <div className="testimonials">
            <div className="specials-grid">
                <div>
                    <q>Donec fringilla turpis ac tincidunt euismod. Pellentesque finibus tincidunt liberoDonec fringilla turpis ac tincidunt euismod. Pellentesque finibus tincidunt libero</q>
                    <p><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStarHalfStroke} /></p>
                </div>
                <div>
                    <q>Donec fringilla turpis ac tincidunt euismod. Pellentesque finibus tincidunt libero</q>
                    <p><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></p>
                </div>
                <div>
                <q>Nam finibus ex eros, ac commodo velit ullamcorper cursus. Morbi dapibus justo eu elit blandit faucibus. Donec nisl ligula, condimentum tempus congue vestibulum, vehicula ac nulla.</q>
                <p><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></p>
                </div>
            </div>
        </div>
    </article>
    );
  };

  export default Testimonials;


