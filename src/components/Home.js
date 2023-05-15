import Hero from "./Hero";
import Highlights from "./Highlights";
import Testimonials from "./Testimonials";
import About from "./About";

function Home() {
    return (
     <div className="home">
        <Hero />
        <Highlights />
        <Testimonials />
        <About />
     </div>
    );
  }

export default Home;