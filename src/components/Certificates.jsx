import React from 'react';

const Certificates = () => {
  // REPLACE WITH YOUR REAL DATA
  const certificates = [
    {
      id: 1,
      title: 'CYBER-SECURITY',
      issuer: 'IIT Bombay',
      date: 'DEC_2025',
      id_code: '9e31ba62',
      link: 'Soham.pdf' 
    },
    {
      id: 2,
      title: 'ETHICAL_HACKING',
      issuer: 'Udemy / Heath Adams',
      date: 'JAN_2024',
      id_code: 'UDEMY-EH-9921',
      link: '#' 
    },
    {
      id: 3,
      title: 'PYTHON_BOOTCAMP',
      issuer: 'Coursera / Google',
      date: 'MAR_2024',
      id_code: 'GOOG-PY-1102',
      link: '#'
    }
  ];

  return (
    <section id="certificates" className="py-20">
      <div className="max-w-5xl mx-auto px-4">
        
        {/* --- TERMINAL CONTAINER START (Matches Contact & Projects) --- */}
        <div className="w-full bg-black border border-neon-green/50 rounded-lg overflow-hidden shadow-[0_0_30px_rgba(0,255,65,0.1)]">
          
          {/* 1. Terminal Header Bar */}
          <div className="bg-neon-green/10 border-b border-neon-green/30 p-3 flex items-center justify-between select-none">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
            </div>
            <div className="font-mono text-neon-green/60 text-xs tracking-widest">
              USER@CYBERPORT:~/CERTIFICATES
            </div>
            <div className="w-10"></div>
          </div>

          {/* 2. Main Content Area */}
          <div className="p-8 bg-black">
            
            <h3 className="text-neon-cyan font-mono text-sm mb-6 flex items-center gap-2 tracking-wider">
              <span className="text-neon-pink">./</span> VERIFIED_CREDENTIALS
            </h3>

            {/* Grid Layout for Certificates */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              
              {certificates.map((cert) => (
                <a 
                  key={cert.id} 
                  href={cert.link}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group block p-4 border border-neon-green/20 bg-neon-green/5 hover:bg-neon-green/10 hover:border-neon-green/60 transition-all duration-300 relative overflow-hidden"
                >
                  
                  {/* Decorative Corner */}
                  <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-neon-green/30 group-hover:border-neon-green transition-colors"></div>

                  <div className="flex flex-col h-full justify-between gap-4">
                    
                    {/* Top: Icon + ID */}
                    <div className="flex justify-between items-start">
                      <div className="w-8 h-8 rounded bg-neon-green/10 flex items-center justify-center border border-neon-green/20 group-hover:border-neon-green text-lg">
                        📜
                      </div>
                      <span className="text-[10px] text-neon-green/40 font-mono border border-neon-green/20 px-1.5 py-0.5 rounded">
                        {cert.id_code}
                      </span>
                    </div>

                    {/* Middle: Info */}
                    <div>
                      <h4 className="text-neon-green font-bold text-sm group-hover:text-white transition-colors tracking-tight">
                        {cert.title}
                      </h4>
                      <p className="text-neon-green/50 text-xs font-mono mt-1">
                        {cert.issuer}
                      </p>
                    </div>

                    {/* Bottom: Date & Status */}
                    <div className="pt-3 border-t border-neon-green/10 flex justify-between items-center text-[10px] font-mono">
                      <span className="text-neon-green/40">{cert.date}</span>
                      <span className="text-neon-cyan opacity-0 group-hover:opacity-100 transition-opacity">
                        [ VIEW_DOC ]
                      </span>
                    </div>

                  </div>
                </a>
              ))}

            </div>

            {/* Bottom System Status Line */}
            <div className="mt-6 border-t border-dashed border-neon-green/20 pt-4 flex justify-between text-[10px] font-mono text-neon-green/40">
              <span>TOTAL_ITEMS: {certificates.length}</span>
              <span className="animate-pulse">DB_STATUS: SYNCED</span>
            </div>

          </div>
        </div>
        {/* --- TERMINAL CONTAINER END --- */}

      </div>
    </section>
  );
};

export default Certificates;