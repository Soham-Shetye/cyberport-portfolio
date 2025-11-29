import React from 'react';

// Skill Data Configuration
const skills = {
  "LANGUAGES": [
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
  ],
  "FRAMEWORKS": [
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Flask", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" },
  ],
  "TOOLS & DB": [
    { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    { name: "Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
  ]
};

const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-5xl mx-auto px-4">
        
        {/* --- TERMINAL CONTAINER START --- */}
        <div className="w-full bg-black border border-neon-green/50 rounded-lg overflow-hidden shadow-[0_0_30px_rgba(0,255,65,0.1)]">
          
          {/* 1. Terminal Header Bar */}
          <div className="bg-neon-green/10 border-b border-neon-green/30 p-3 flex items-center justify-between select-none">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
            </div>
            <div className="font-mono text-neon-green/60 text-xs tracking-widest">
              USER@CYBERPORT:~/SKILLS
            </div>
            <div className="w-10"></div> {/* Spacer for centering */}
          </div>

          {/* 2. Terminal Body */}
          <div className="p-6 md:p-10 space-y-12">
            
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="relative">
                
                {/* Category Header */}
                <h3 className="text-neon-cyan font-mono text-lg mb-6 flex items-center gap-3 border-b border-neon-green/10 pb-2">
                  <span className="text-neon-pink font-bold">{'>'}</span> 
                  <span className="tracking-wider">{category}</span>
                </h3>
                
                {/* Skills Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {items.map((skill) => (
                    <div 
                      key={skill.name}
                      className="group relative bg-neon-green/5 border border-neon-green/20 hover:border-neon-green/60 hover:bg-neon-green/10 transition-all duration-300 rounded p-4 flex flex-col items-center justify-center gap-3 overflow-hidden cursor-crosshair"
                    >
                      {/* Hover Scanline Effect */}
                      <div className="absolute inset-0 bg-gradient-to-t from-neon-green/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

                      {/* Icon with Filter Logic */}
                      <div className="relative z-10 p-2 bg-black/50 rounded-full border border-neon-green/10 group-hover:border-neon-green/50 transition-colors">
                        <img 
                          src={skill.icon} 
                          alt={skill.name} 
                          className="w-10 h-10 transition-all duration-500 filter grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110"
                        />
                      </div>
                      
                      {/* Name */}
                      <span className="relative z-10 text-neon-green/80 font-mono text-xs tracking-wider group-hover:text-white transition-colors">
                        {skill.name}
                      </span>
                      
                      {/* Corner Accents */}
                      <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-neon-green/50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-neon-green/50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </div>
                  ))}
                </div>
              </div>
            ))}

          </div>
          {/* --- TERMINAL BODY END --- */}
          
          {/* Bottom Status Bar */}
          <div className="bg-neon-green/5 border-t border-neon-green/20 p-2 px-4 flex justify-between items-center text-[10px] text-neon-green/40 font-mono">
            <span>PACKAGES: {Object.values(skills).flat().length} INSTALLED</span>
            <span className="animate-pulse">SYSTEM_HK: OK</span>
          </div>

        </div>
        {/* --- TERMINAL CONTAINER END --- */}

      </div>
    </section>
  );
};

export default Skills;