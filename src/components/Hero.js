function Hero () {
    return (
     <main className="section">
        <img className="bg-img" src={require("./assets/restaurant.jpg")} alt="restaurant" />
        <div className="main">
            <h1 className="title">LITTLE LEMON</h1>
            <h1 className="title">CHICAGO</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec laoreet nisl sit amet sodales facilisis. Sed tellus tellus, mattis vel turpis nec, tincidunt pulvinar nunc. Nunc facilisis malesuada volutpat. Curabitur nec metus ex.</p>
            <button>Reserve a Table</button>
        </div>
     </main>
    );
  };

  export default Hero;