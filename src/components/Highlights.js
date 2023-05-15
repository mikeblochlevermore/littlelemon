import { Link } from "react-router-dom";

function Highlights () {
    return (
     <section className="section">
        <div className="highlights">
            <div>
            <h1 className="title">SPECIALS</h1>
            <button><Link to="/Orders">Order Online</Link></button>
            </div>
            <div className="specials-grid">
                <div>
                    <img className="specials-img" src={require("./assets/greek salad.jpg")} alt="greek salad" />
                    <h2>Greek Salad</h2>
                    <p>Donec fringilla turpis ac tincidunt euismod. Pellentesque finibus tincidunt libero</p>
                    <h3>$12</h3>
                </div>
                <div>
                <img className="specials-img" src={require("./assets/lemon dessert.jpg")} alt="lemon dessert" />
                    <h2>Lemon Tart</h2>
                    <p>Donec fringilla turpis ac tincidunt euismod. Pellentesque finibus tincidunt libero</p>
                    <h3>$14</h3>
                </div>
                <div>
                <img className="specials-img" src={require("./assets/bruscetta.jpg")} alt="bruscetta" />
                    <h2>Bruscetta</h2>
                    <p>Donec fringilla turpis ac tincidunt euismod. Pellentesque finibus tincidunt libero</p>
                    <h3>$10</h3>
                </div>
            </div>
        </div>
    </section>
    );
  };

  export default Highlights;
