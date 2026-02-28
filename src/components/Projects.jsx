import React from 'react';

const Projects = () => {
  const projectData = [
    {
      id: 1,
      title: "MANGROVES_CONSERVATION",
      type: "LIVE_PROJECT",
      status: "IN_DEVELOPMENT", // Added status flag
      description: "A high-performance digital ecosystem supporting the mangrove legacy of India. Designed to reach a national audience with eco-tourism and ecological consciousness.",
      tech: ["HTML5", "CSS3", "JAVASCRIPT"],
      link: "https://pankhol-juva.netlify.app/", 
      repo: "https://github.com/Soham-Shetye/Mangroves Conservation"
    },
    {
      id: 2,
      title: "CLI_QUERY_BOT",
      type: "SYSTEM_AUTOMATION",
      status: "STABLE",
      description: "A Python-based Command Line Interface tool designed for basic query handling and system interaction tasks.",
      tech: ["PYTHON", "OS_MODULE", "CLI"],
      link: null, 
      repo: "https://github.com/Soham-Shetye" 
    },
    /*{
      id: 3,
      title: "SYSTEM_HEALTH_CHECKER",
      type: "PORTFOLIO_PROJECT",
      status: "BETA",
      description: "Automated script to monitor Debian system performance, memory usage, and CPU temperature with real-time logging.",
      tech: ["PYTHON", "BASH", "LINUX"],
      link: null,
      repo: "https://github.com/Soham-Shetye"
    }*/
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-5xl mx-auto px-4">
        <div className="w-full bg-black border border-neon-green/50 rounded-lg overflow-hidden shadow-[0_0_30px_rgba(0,255,65,0.1)]">
          
          <div className="bg-neon-green/10 border-b border-neon-green/30 p-3 flex items-center justify-between">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
            </div>
            <div className="font-mono text-neon-green/60 text-xs tracking-widest uppercase">
              USER@CYBERPORT:~/PROJECTS
            </div>
            <div className="w-10"></div>
          </div>

          <div className="p-8">
            <h3 className="text-neon-cyan font-mono text-sm mb-8 flex items-center gap-2 tracking-wider">
              <span className="text-neon-pink">./</span> DEPLOYED_PROJECTS
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projectData.map((project) => (
                <div key={project.id} className="group p-6 border border-neon-green/20 bg-neon-green/5 hover:border-neon-green/60 transition-all duration-300 relative flex flex-col justify-between">
                  
                  <div>
                    <div className="absolute top-4 right-4 text-[9px] font-mono text-neon-pink border border-neon-pink/30 px-2 py-0.5 rounded tracking-tighter">
                      {project.type}
                    </div>

                    <h4 className="text-neon-green font-bold text-lg mb-2 tracking-tight">
                      {project.title}
                    </h4>
                    <p className="text-neon-green/60 text-xs font-mono leading-relaxed mb-4 h-14 overflow-hidden">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech?.map((t) => (
                        <span key={t} className="text-[9px] font-mono text-neon-cyan bg-neon-cyan/10 px-2 py-0.5 rounded border border-neon-cyan/20">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-neon-green/10">
                    <div className="flex gap-4">
                      <a href={project.repo} target="_blank" rel="noopener noreferrer" className="text-[10px] font-mono text-neon-green hover:text-white transition-colors">
                        [ SOURCE_CODE ]
                      </a>
                      {project.link && (
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-[10px] font-mono text-neon-cyan hover:text-white transition-colors">
                          [ LIVE_DEMO ]
                        </a>
                      )}
                    </div>

                    {/* NEW: Development Status Indicator */}
                    {project.status === "IN_DEVELOPMENT" && (
                      <span className="text-[9px] font-mono text-yellow-500 animate-pulse flex items-center gap-1">
                        <span className="w-1 h-1 bg-yellow-500 rounded-full"></span>
                        DEV_PHASE
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-neon-green/5 border-t border-neon-green/20 p-2 px-4 flex justify-between items-center text-[10px] text-neon-green/40 font-mono">
            <span>OBJECTS_DETECTED: {projectData.length}</span>
            <span className="animate-pulse">BUILD_STATUS: SUCCESS</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;