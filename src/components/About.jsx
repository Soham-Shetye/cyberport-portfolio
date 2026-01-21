import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="max-w-5xl mx-auto px-4">
        
        {/* THE TERMINAL WINDOW CONTAINER */}
        <div className="w-full bg-black border border-neon-green/50 rounded-lg overflow-hidden shadow-[0_0_30px_rgba(0,255,65,0.1)]">
          
          {/* 1. Terminal Header Bar */}
          <div className="bg-neon-green/10 border-b border-neon-green/30 p-3 flex items-center justify-between select-none">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
            </div>
            <div className="font-mono text-neon-green/60 text-xs tracking-widest">
              USER@CYBERPORT:~/ABOUT
            </div>
            <div className="w-10"></div> {/* Spacer for centering */}
          </div>

          {/* 2. Terminal Body (The structured box) */}
          <div className="p-6 md:p-10 grid md:grid-cols-[1.5fr_1fr] gap-8 items-center font-mono">
            
            {/* LEFT COLUMN: The Bio Logic */}
            <div className="space-y-6">
              
              {/* Command 1 */}
              <div className="space-y-2">
                <div className="flex items-center gap-3 text-neon-green/60">
                  <span className="text-neon-pink">➜</span>
                  <span className="text-neon-cyan">~</span>
                  <span>whoami</span>
                </div>
                <p className="text-neon-green pl-6 leading-relaxed opacity-90">
                  I am a 2nd-year IT student and creative technologist. I merge clean code with security protocols to build immersive digital experiences.
                </p>
              </div>

              {/* Command 2 */}
              <div className="space-y-2">
                <div className="flex items-center gap-3 text-neon-green/60">
                  <span className="text-neon-pink">➜</span>
                  <span className="text-neon-cyan">~</span>
                  <span>cat mission.txt</span>
                </div>
                <p className="text-neon-green pl-6 leading-relaxed opacity-90">
                  Specializing in Python, Linux (Debian 12), and secure web architecture. Currently seeking internship opportunities to deploy my skills in a live environment.
                </p>
              </div>

              {/* Command 3 (The CTA Button) */}
              {/*<div className="pt-4 space-y-2">
                <div className="flex items-center gap-3 text-neon-green/60">
                  <span className="text-neon-pink">➜</span>
                  <span className="text-neon-cyan">~</span>
                  <span className="animate-pulse">_</span>
                </div>
                
                <div className="pl-6">
                  <button className="group flex items-center gap-3 px-5 py-3 bg-neon-green/5 border border-neon-green/40 hover:bg-neon-green hover:text-black transition-all duration-300">
                    <span className="font-bold">./DOWNLOAD_RESUME.SH</span>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity">
                       [EXEC]
                    </span>
                  </button>
                </div>
              </div>*/}

              {/* Command 3 (The CTA Button) */}
<div className="pt-4 space-y-2">
  <div className="flex items-center gap-3 text-neon-green/60">
    <span className="text-neon-pink">➜</span>
    <span className="text-neon-cyan">~</span>
    <span className="animate-pulse">_</span>
  </div>
  
  <div className="pl-6">
    {/* CHANGED: Used <a> tag instead of <button> */}
    <a 
      href="/x.pdf" 
      download="My_Resume.pdf" // This creates the download action
      className="group inline-flex items-center gap-3 px-5 py-3 bg-neon-green/5 border border-neon-green/40 hover:bg-neon-green hover:text-black transition-all duration-300 cursor-pointer"
    >
      <span className="font-bold">./DOWNLOAD_RESUME.SH</span>
      <span className="opacity-0 group-hover:opacity-100 transition-opacity">
          [EXEC]
      </span>
    </a>
  </div>
</div>

            </div>

            {/* RIGHT COLUMN: The Visual Structure */}
            {/* RIGHT SIDE: Profile Image */}
<div className="flex flex-col items-center justify-start pt-10 md:pt-0">
  
  {/* The Container */}
  <div className="relative w-64 md:w-72 aspect-[3/4] border-2 border-dashed border-neon-green/30 p-2 rounded bg-black/50">
    
    {/* Corner Decors */}
    <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-neon-green"></div>
    <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-neon-green"></div>

    {/* The Image */}
    <div className="w-full h-full relative overflow-hidden bg-neon-green/10">
      <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,255,65,0.1)_50%)] bg-[length:100%_4px] pointer-events-none z-20"></div>
      <img 
        src="/S.jpeg"  
        alt="Profile" 
        className="w-full h-full object-cover object-top filter grayscale hover:grayscale-0 transition-all duration-500"
      />
    </div>
  </div>

  {/* Status Label - FIXED: Added mt-6 to create a proper gap */}
  <div className="mt-6">
    <div className="inline-block px-3 py-1 border border-neon-green/30 bg-neon-green/5 rounded-full">
      <div className="flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-neon-green animate-pulse"></span>
        <span className="text-[10px] font-mono text-neon-green tracking-widest">STATUS: ONLINE</span>
      </div>
    </div>
  </div>

</div>
            {/* (STOP REPLACING HERE) */}
          </div>
        </div>

      </div>
    </section> 
  );
};

export default About;