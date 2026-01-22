{/*import React, { useState, useEffect } from 'react';
import GlitchText from './GlitchText';

const Hero = ({ onEnter }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden z-10">
       
      {/* Background Matrix-like aesthetic elements */}
      /*<div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 border-l-2 border-t-2 border-neon-green"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 border-r-2 border-b-2 border-neon-green"></div>
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-neon-green/30"></div>
        <div className="absolute left-1/2 top-0 w-[1px] h-full bg-neon-green/30"></div>
      </div>

      <div className={`z-10 flex flex-col items-center gap-6 transition-opacity duration-1000 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
        <div className="text-neon-green text-sm md:text-base tracking-[0.3em] uppercase animate-pulse">
          System Online // Secure Connection Established
        </div>
        
        <GlitchText 
          text="ALEX_DEV.EXE" 
          className="text-5xl md:text-8xl font-black tracking-tighter" 
        />
        
        <div className="flex flex-col items-center gap-2 mt-2">
          <p className="text-neon-cyan font-mono text-lg md:text-xl">
            {'>'} Full Stack Engineer & Creative Coder
          </p>
          <p className="text-neon-green/60 font-mono text-sm">
            [ REACT / TYPESCRIPT / SECURITY / WEBGL ]
          </p>
        </div>

        <button 
          onClick={onEnter}
          className="mt-12 group relative px-8 py-4 bg-transparent overflow-hidden"
        >
          <span className="absolute inset-0 w-full h-full bg-neon-green/10 group-hover:bg-neon-green/20 transition-all duration-300"></span>
          <span className="absolute top-0 left-0 w-2 h-2 border-l-2 border-t-2 border-neon-green transition-all duration-300 group-hover:w-full group-hover:h-full"></span>
          <span className="absolute bottom-0 right-0 w-2 h-2 border-r-2 border-b-2 border-neon-green transition-all duration-300 group-hover:w-full group-hover:h-full"></span>
          
          <span className="relative font-mono font-bold text-neon-green group-hover:text-white tracking-widest transition-colors duration-300 flex items-center gap-2">
            ACCESS_PORTFOLIO <span className="animate-pulse">_</span>
          </span>
        </button>
      </div>
    </div>
  );
};

export default Hero; */

import React, { useState, useEffect } from 'react';
import GlitchText from './GlitchText';

const Hero = ({ onEnter }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden z-10">
       
      {/* Background Matrix-like aesthetic elements */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 border-l-2 border-t-2 border-neon-green"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 border-r-2 border-b-2 border-neon-green"></div>
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-neon-green/30"></div>
        <div className="absolute left-1/2 top-0 w-[1px] h-full bg-neon-green/30"></div>
      </div>

      <div className={`z-10 flex flex-col items-center gap-6 transition-opacity duration-1000 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
        <div className="text-neon-green text-sm md:text-base tracking-[0.3em] uppercase animate-pulse">
          System Online // Secure Connection Established
        </div>
        
        {/* 1. We use GlitchText to keep the "Effect" 
           2. We add 'scanline-text' to get the "Lines" from the image
           3. We use 'text-6xl md:text-8xl' to match the "Size" 
        */}
        <GlitchText 
          text="SOHAM_DEV.EXE" 
          className="scanline-text text-6xl md:text-8xl font-black tracking-tighter" 
        />
        
        <div className="flex flex-col items-center gap-2 mt-2">
          <p className="text-neon-cyan font-mono text-lg md:text-xl">
            {'>'} Python Developer & Cybersecurity Enthusiast
          </p>
          <p className="text-neon-green/60 font-mono text-sm">
            [ PYTHON / AI / CYBERSECURITY / LINUX ]
          </p>
        </div>

        <button 
          onClick={onEnter}
          className="mt-12 group relative px-8 py-4 bg-transparent overflow-hidden"
        >
          <span className="absolute inset-0 w-full h-full bg-neon-green/10 group-hover:bg-neon-green/20 transition-all duration-300"></span>
          <span className="absolute top-0 left-0 w-2 h-2 border-l-2 border-t-2 border-neon-green transition-all duration-300 group-hover:w-full group-hover:h-full"></span>
          <span className="absolute bottom-0 right-0 w-2 h-2 border-r-2 border-b-2 border-neon-green transition-all duration-300 group-hover:w-full group-hover:h-full"></span>
          
          <span className="relative font-mono font-bold text-neon-green group-hover:text-white tracking-widest transition-colors duration-300 flex items-center gap-2">
            ACCESS_PORTFOLIO <span className="animate-pulse">_</span>
          </span>
        </button>
      </div>
    </div>
  );
};

export default Hero;