import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLemon } from '@fortawesome/free-solid-svg-icons'

function Nav() {
    return (
        <nav className="Nav">
            <ul>
                <a href="/"><FontAwesomeIcon icon={faLemon} /></a>
                <a href="/">ABOUT</a>
                <a href="/">MENU</a>
                <a href="/">RESERVATIONS</a>
                <a href="/">ORDER ONLINE</a>
                <a href="/">LOG IN</a>
            </ul>
        </nav>
    );
};

export default Nav;