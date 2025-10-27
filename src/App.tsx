import Navbar from "./sections/Navbar.tsx";
import Hero from "./sections/Hero.tsx";
import About from "./sections/About.tsx";
import Projects from "./sections/Projects.tsx";
import Experiences from "./sections/Experiences.tsx";
import Testimonial from "./sections/Testimonial.tsx";
import Contact from "./sections/Contact.tsx";

const App = () => {
  return (
    <main className={"container mx-auto max-w-7xl"}>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Experiences />
      <Testimonial />
      <Contact />
    </main>
  );
};

export default App;