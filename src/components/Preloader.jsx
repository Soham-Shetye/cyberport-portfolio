import React, { useState, useEffect } from 'react';

const Preloader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [text, setText] = useState('INITIALIZING...');
  
  // The "Hacker" loading steps
  const steps = [
    { pct: 10, msg: 'LOADING_KERNEL...' },
    { pct: 30, msg: 'DECRYPTING_ASSETS...' },
    { pct: 55, msg: 'ESTABLISHING_SECURE_CONNECTION...' },
    { pct: 80, msg: 'MOUNTING_VIRTUAL_DOM...' },
    { pct: 100, msg: 'ACCESS_GRANTED' }
  ];

  useEffect(() => {
    // This timer simulates the loading process
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 800); // Wait a bit at 100% before closing
          return 100;
        }
        
        // Speed up/slow down randomly to feel like a real computer working
        const jump = Math.floor(Math.random() * 10) + 1;
        const next = Math.min(prev + jump, 100);
        
        // Find the text message for current percentage
        const currentStep = steps.find(s => s.pct >= next);
        if (currentStep) setText(currentStep.msg);
        
        return next;
      });
    }, 150); // Speed of the bar (lower = faster)

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed inset-0 bg-black z-[9999] flex flex-col items-center justify-center font-mono text-neon-green cursor-wait">
      
      {/* Container for width */}
      <div className="w-80 md:w-96 space-y-4">
        
        {/* Loading Text */}
        <div className="flex justify-between text-xs md:text-sm tracking-widest opacity-80">
          <span>{'>'} {text}</span>
          <span>{progress}%</span>
        </div>

        {/* The Progress Bar */}
        <div className="h-2 w-full bg-neon-dark border border-neon-green/30 p-[2px]">
          <div 
            className="h-full bg-neon-green shadow-[0_0_10px_#00ff41] transition-all duration-100 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        {/* Decorative Hex Codes (Fake data stream) */}
        <div className="h-8 overflow-hidden text-[10px] text-neon-green/40 opacity-50 whitespace-nowrap">
          {progress < 100 ? (
            <div className="animate-pulse">
              0x45 0x12 0x99 LOADING... MEM_ALLOC: OK... KERNEL_PANIC: FALSE...
            </div>
          ) : (
            <div className="text-neon-cyan animate-pulse">
              SYSTEM READY. WELCOME, USER.
            </div>
          )}
        </div>

      </div>

      {/* Background Scanlines (reusing your CSS class) */}
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-[-1] bg-[length:100%_2px,3px_100%]"></div>
    </div>
  );
};

export default Preloader; 
