import React, { useState, useEffect } from 'react';
import BootLoader from './components/BootLoader'; 
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Certificates from './components/Certificates';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [entered, setEntered] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // --- CRITICAL FIX: FORCE SCROLL TO TOP ON LOAD ---
  useEffect(() => {
    // 1. Clear the hash from URL (removes #about, #projects etc. on refresh)
    if (window.location.hash) {
      window.history.replaceState("", document.title, window.location.pathname);
    }

    // 2. Disable browser's automatic scroll memory
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    // 3. Force the window to the very top
    window.scrollTo(0, 0);
  }, []);

  const handleBootComplete = () => {
    setIsLoading(false);
  };

  const handleEnter = () => {
    setEntered(true);
    // Ensure we are at the top when the Hero slides away
    window.scrollTo(0, 0); 
    setTimeout(() => setShowContent(true), 800);
  };

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <>
      {isLoading ? (
        <BootLoader onComplete={handleBootComplete} />
      ) : (
        <div className="min-h-screen bg-neon-dark text-neon-green font-mono selection:bg-neon-green selection:text-black relative">
           
           <div className="scanlines pointer-events-none z-[100]"></div>
           <div className="fixed inset-0 pointer-events-none bg-gradient-to-t from-black/20 to-transparent z-[90]"></div>

           {/* Hero / Boot Screen */}
           <div className={`fixed inset-0 transition-transform duration-1000 ease-in-out z-50 bg-neon-dark ${entered ? '-translate-y-full' : 'translate-y-0'}`}>
              <Hero onEnter={handleEnter} />
           </div>

           {/* Main Website Content */}
           <main className={`transition-opacity duration-1000 ease-in-out ${showContent ? 'opacity-100' : 'opacity-0'}`}>
             
             <nav className="fixed top-0 left-0 right-0 z-40 bg-neon-dark/90 backdrop-blur-md border-b border-neon-green/20">
               <div className="max-w-5xl mx-auto px-4 py-3 flex justify-between items-center">
                 <div className="text-neon-green font-bold text-xl tracking-tighter hover:text-neon-cyan transition-colors cursor-pointer">~/SOHAM</div>
                 
                 <div className="hidden md:flex gap-6 text-xs md:text-sm">
                   <a href="#about" className="hover:text-neon-cyan transition-colors hover:underline decoration-neon-cyan decoration-2 underline-offset-4">[ ABOUT ]</a>
                   <a href="#skills" className="hover:text-neon-cyan transition-colors hover:underline decoration-neon-cyan decoration-2 underline-offset-4">[ SKILLS ]</a>
                   <a href="#certificates" className="hover:text-neon-cyan transition-colors hover:underline decoration-neon-cyan decoration-2 underline-offset-4">[ CERTIFICATES ]</a>
                   <a href="#projects" className="hover:text-neon-cyan transition-colors hover:underline decoration-neon-cyan decoration-2 underline-offset-4">[ PROJECTS ]</a>
                   <a href="#contact" className="hover:text-neon-cyan transition-colors hover:underline decoration-neon-cyan decoration-2 underline-offset-4">[ CONTACT ]</a>
                 </div>

                 <button className="md:hidden text-neon-green border border-neon-green/30 px-3 py-1 text-sm hover:bg-neon-green/10" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                    {mobileMenuOpen ? '[ X ]' : '[ MENU ]'}
                 </button>
               </div>

               {mobileMenuOpen && (
                 <div className="md:hidden absolute top-full left-0 w-full bg-black border-b border-neon-green/20 p-4 flex flex-col gap-4 shadow-[0_4px_20px_rgba(0,255,65,0.1)]">
                    <a href="#about" onClick={closeMobileMenu} className="block py-2 text-neon-green hover:pl-2 transition-all border-l-2 border-transparent hover:border-neon-green pl-1"> &gt; ABOUT</a>
                    <a href="#skills" onClick={closeMobileMenu} className="block py-2 text-neon-green hover:pl-2 transition-all border-l-2 border-transparent hover:border-neon-green pl-1"> &gt; SKILLS</a>
                    <a href="#certificates" onClick={closeMobileMenu} className="block py-2 text-neon-green hover:pl-2 transition-all border-l-2 border-transparent hover:border-neon-green pl-1"> &gt; CERTIFICATES</a>
                    <a href="#projects" onClick={closeMobileMenu} className="block py-2 text-neon-green hover:pl-2 transition-all border-l-2 border-transparent hover:border-neon-green pl-1"> &gt; PROJECTS</a>
                    <a href="#contact" onClick={closeMobileMenu} className="block py-2 text-neon-green hover:pl-2 transition-all border-l-2 border-transparent hover:border-neon-green pl-1"> &gt; CONTACT</a>
                 </div>
               )}
             </nav>

             <div className="pt-24 px-4 pb-20 max-w-6xl mx-auto">
                <About />
                <Skills />
                <Certificates />
                <Projects />
                <Contact />
                
                <footer className="text-center text-neon-green/40 text-xs py-8 border-t border-neon-green/10 mt-12">
                  <p>SYSTEM STATUS: STABLE</p>
                  <p>&copy; 2026 SOHAM SHETYE. ALL RIGHTS RESERVED.</p>
                </footer>
             </div>
           </main>
        </div>
      )}
    </>
  );
};

export default App;