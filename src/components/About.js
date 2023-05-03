function About () {
  return (
   <article className="section">
                <div className="about">
                    <img className="about-img" src={require("./assets/Mario and Adrian A.jpg")} alt="owners" />
                </div>
                <div className="about-txt">
                    <h1 className="title">MARIO & ADRIAN</h1>
                    <br></br>
                    <h3>Vestibulum ex urna, aliquam ac lacus nec, dapibus dapibus ipsum. Nulla tristique risus at cursus lacinia. Duis suscipit sed justo eu efficitur. Quisque nec laoreet velit. Integer varius nisl sed erat vehicula interdum. Nunc convallis ipsum id quam suscipit, id malesuada erat ultricies. Nulla in nulla turpis. Donec pellentesque vulputate nibh venenatis condimentum.</h3>
               </div>
  </article>
  );
};

export default About;
