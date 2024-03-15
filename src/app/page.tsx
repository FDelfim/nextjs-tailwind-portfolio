import Home from "./components/home";
import Projects from "./components/projects";
import Footer from "./components/footer";
import Navbar from "./components/navbar";

export default function Index() {
  return (
    <>
      <Navbar />
      <div className='px-4 py-2 lg:px-40 md:px-10'>
        <Home />
        <div className='bg-amber-500 w-full my-3 rounded-xl'>
          <div className='flex justify-center items-center p-2 text-center'>
            <p className='text-white'>🚨 ESTAMOS EM OBRAS 🚨<br/>🚧 PORTFOLIO EM DESENVOLVIMENTO 🚧</p>
          </div>
        </div>
        <Projects />
        <Footer />
      </div>
    </>
  );
}

