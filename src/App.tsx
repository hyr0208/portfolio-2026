import { NavBar } from "./components/NavBar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Career } from "./components/Career";
import { Projects } from "./components/Projects";
import { Certification } from "./components/Certification";
import { Education } from "./components/Education";
import { Contact } from "./components/Contact";
import { BackToTop } from "./components/BackToTop";

function App() {
  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <About />
        <Career />
        <Projects />
        <Certification />
        <Education />
        <Contact />
      </main>
      <BackToTop />
    </>
  );
}

export default App;
