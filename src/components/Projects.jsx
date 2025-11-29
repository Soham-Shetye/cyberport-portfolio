import React, { useState } from 'react';
import { projectsData } from '../data/portfolioData';

const Projects = () => {
  // State to track which project is currently selected (Default to the first one)
  const [activeProject, setActiveProject] = useState(projectsData[0]);

  return (
    <section id="projects" className="py-20">
      <div className="max-w-5xl mx-auto px-4">
        
        {/* --- TERMINAL CONTAINER START --- */}
        <div className="w-full bg-black border border-neon-green/50 rounded-lg overflow-hidden shadow-[0_0_30px_rgba(0,255,65,0.1)] flex flex-col md:h-[600px]">
          
          {/* 1. Terminal Header Bar */}
          <div className="bg-neon-green/10 border-b border-neon-green/30 p-3 flex items-center justify-between select-none shrink-0">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
            </div>
            <div className="font-mono text-neon-green/60 text-xs tracking-widest">
              USER@CYBERPORT:~/PROJECTS
            </div>
            <div className="w-10"></div>
          </div>

          {/* 2. Main IDE Layout (Split View) */}
          <div className="flex flex-col md:flex-row h-full overflow-hidden">
            
            {/* LEFT SIDEBAR: Project List */}
            <div className="w-full md:w-1/3 border-b md:border-b-0 md:border-r border-neon-green/20 bg-neon-green/5 p-4 overflow-y-auto">
              <div className="text-neon-cyan font-mono text-xs mb-4 tracking-wider opacity-70">
                // EXPLORER
              </div>
              <div className="space-y-1">
                {projectsData.map((project) => (
                  <button
                    key={project.id}
                    onClick={() => setActiveProject(project)}
                    className={`w-full text-left px-3 py-2 font-mono text-sm transition-all duration-200 border-l-2 ${
                      activeProject.id === project.id 
                        ? 'bg-neon-green/20 text-white border-neon-green' 
                        : 'text-neon-green/70 border-transparent hover:bg-neon-green/10 hover:text-neon-green'
                    }`}
                  >
                    <span className="opacity-50 mr-2">{'>'}</span>
                    {project.title.toLowerCase()}
                    <span className="opacity-50 text-[10px] ml-1">
                      {project.id % 2 === 0 ? '.py' : '.js'}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* RIGHT CONTENT: Preview Pane */}
            <div className="w-full md:w-2/3 p-6 md:p-8 overflow-y-auto bg-black relative">
              
              {/* Top metadata bar */}
              <div className="flex justify-between items-end mb-6 border-b border-neon-green/20 pb-4">
                <div>
                   <h3 className="text-2xl md:text-3xl font-bold text-neon-green font-mono">
                    {activeProject.title}
                   </h3>
                   <p className="text-neon-green/40 text-xs mt-1 font-mono">
                     ID: {activeProject.id} // PERMISSIONS: DRWX-R-X
                   </p>
                </div>
                {/* Tech Stack Badge Row */}
                <div className="flex gap-2">
                  {activeProject.techStack.slice(0, 3).map((tech, i) => (
                    <span key={i} className="text-[10px] border border-neon-cyan/30 text-neon-cyan px-2 py-1 rounded-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Image Area */}
              <div className="relative w-full aspect-video border border-neon-green/30 mb-6 group overflow-hidden bg-neon-dark">
                <img 
                  src={activeProject.imageUrl} 
                  alt={activeProject.title} 
                  className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-neon-green/10 pointer-events-none group-hover:bg-transparent transition-colors"></div>
                {/* Grid overlay for texture */}
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>
              </div>

              {/* Description */}
              <div className="font-mono text-neon-green/80 text-sm leading-relaxed mb-8">
                <span className="text-neon-pink mr-2">➜</span>
                {activeProject.description}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <a 
                  href={activeProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 border border-neon-green text-neon-green hover:bg-neon-green hover:text-black transition-all text-sm font-mono font-bold"
                >
                  [ VIEW_CODE ]
                </a>
                <a 
                  href={activeProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 border border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-black transition-all text-sm font-mono font-bold"
                >
                  [ LIVE_DEMO ]
                </a>
              </div>

            </div>

          </div>
        </div>
        {/* --- TERMINAL CONTAINER END --- */}

      </div>
    </section>
  );
};

export default Projects;