import "./App.css"

import Nav from "./components/Nav"
import About from "./components/About";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

function App() {
  return (
   <>
    <Nav />
    <Hero />
    <Highlights />
    <Testimonials />
    <About />
    <Footer />
   </>
  );
}

export default App;
