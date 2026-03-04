import Navbar from "./Componenets/Navbar/Navbar.jsx";
import Home from "./Componenets/Home/Home.jsx";
import About from "./Componenets/About/About.jsx";
import Skills from "./Componenets/Skills/Skills.jsx";
import Projects from "./Componenets/Projects/Projects.jsx";
import Contact from "./Componenets/Contact/contact.jsx";


function App() {
  return (
    <>
      <Navbar />

      <main>
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
          <Projects/>
        </section>

        <section id="contact">
          <Contact/>
        </section>
      </main>
    </>
  );
}

export default App;