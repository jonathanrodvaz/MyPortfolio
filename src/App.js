import Navbar from './scenes/Navbar';
import DotGroup from './scenes/DotGroup';
import Landing from './scenes/Landing';
// import MySkills from './scenes/MySkills';
import Projects from './scenes/Projects';
// import Testimonials from './scenes/Testimonials';
import Contact from './scenes/Contact';
import Footer from './scenes/Footer';
import { useEffect, useState } from "react";
import LineGreen from './components/LineGreen';
import useMediaQuery from "./hooks/useMediaQuery";


function App() {
  const [selectedPage, setSelectedPage] = useState('home');
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const isAboveMediumScreens = useMediaQuery('(min-width: 1060px)');
  
useEffect(() => {
  const handleScroll = () => {
    if (window.scrollY === 0) setIsTopOfPage(true);
    if(window.scrollY !== 0) setIsTopOfPage(false);
  }
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);

  return (
  <div className="app bg-red">
    <Navbar
    isTopOfPage={isTopOfPage} 
    selectedPage={selectedPage}
    setSelectedPage={setSelectedPage}
    />
    <div className='w-5/6 mx-auto md:h-full'>
      {isAboveMediumScreens && (
        <DotGroup
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
        />
      )}
      <Landing setSelectedPage={setSelectedPage} />
    </div>
    <LineGreen />
    {/* <div className='w-5/6 mx-auto md:h-full'>
        <MySkills />
    </div> */}
    <LineGreen/>
    <div className='w-5/6 mx-auto'>
        <Projects />
    </div>
    <LineGreen/>
    {/* <div className='w-5/6 mx-auto md:h-full'>
        <Testimonials />
    </div> */}
    <LineGreen/>
    <div className='w-5/6 mx-auto md:h-full'>
        <Contact />
    </div>
    <Footer />
  </div>
  );
}

export default App;
