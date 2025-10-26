import Navbar from "./sections/Navbar.tsx";
import Hero from "./sections/Hero.tsx";
import About from "./sections/About.tsx";
import Projects from "./sections/Projects.tsx";

const App = () => {
  return (
    <main className={"container mx-auto max-w-7xl"}>
      <Navbar />
      <Hero />
      <About />
      <Projects />
    </main>
  );
};

export default App;