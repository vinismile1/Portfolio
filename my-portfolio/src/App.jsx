import Navbar from "./components/Navbar";
import MobileDock from "./components/MobileDock";
import Home from "./section/Home";
import About from "./section/About";
import Skills from "./section/Skills";
import Projects from "./section/Projects";
import Education from "./section/Education";
import Experience from "./section/Experience";
import Contect from "./section/Contect";
import Footer from "./section/Footer";
import ParticalsBackground from "./components/ParticalsBackground";
import Cursor from "./components/Cursor";

function App() {
  return (
    <div className="bg-black text-white scroll-smooth relative overflow-x-hidden">

      <ParticalsBackground />
      <Cursor />

      <Navbar />
      <MobileDock/>

      <section id="home">
        <Home />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="education">
        <Education />
      </section>

      <section id="experience">
        <Experience />
      </section>

      <section id="contact">
        <Contect />
      </section>

      <Footer />
    </div>
  );
}

export default App;
