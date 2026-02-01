import Home from "./components/home";
import Projects from "./components/projects";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Experiences from "./components/experiences";

export default function Index() {
  return (
    <>
      <Navbar />
      <div className='container mx-auto px-4 md:px-0 py-2'>
        <Home />
        <Projects />
        <Experiences />
        <Footer />
      </div>
    </>
  );
}

