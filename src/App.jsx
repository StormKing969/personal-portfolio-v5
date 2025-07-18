import React from "react";
import Hero from "./sections/Hero.jsx";
import ShowCaseSection from "./sections/ShowCaseSection.jsx";
import NavBar from "./components/NavBar.jsx";

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <ShowCaseSection />
    </>
  );
};
export default App;