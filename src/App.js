import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLemon } from '@fortawesome/free-solid-svg-icons'

import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home"
import Reservations from "./components/Reservations"
import About from "./components/About"
import Orders from "./components/Orders"
import Footer from "./components/Footer"

import "./App.css"

function App() {
    return (
        <div>
            <nav className="nav">
                <Link to="/" className="home"><FontAwesomeIcon icon={faLemon} /></Link>
                <Link to="/Reservations" className="Reservations">Reservations</Link>
                <Link to="/About" className="About">About</Link>
                <Link to="/Orders" className="Orders">Orders</Link>
            </nav>
            <div>
                {
                    // Place the Routes in another div, so the pages don't render as part of the nav section
                }
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/Reservations" element={<Reservations />}></Route>
                    <Route path="/About" element={<About />}></Route>
                    <Route path="/Orders" element={<Orders />}></Route>
                </Routes>
                <Footer />
            </div>
        </div>
    );
};

export default App;