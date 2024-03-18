import Home from "./components/home";
import Projects from "./components/projects";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Experience from "./components/experience";

export default function Index() {
  return (
    <>
      <Navbar />
      <div className='px-4 py-2 lg:px-40 md:px-10'>
        <Home />
        <Projects />
        <Experience />
        <Footer />
      </div>
    </>
  );
}

