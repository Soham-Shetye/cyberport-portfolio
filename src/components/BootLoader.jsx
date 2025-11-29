import React, { useState, useEffect, useRef } from 'react';

const BootLoader = ({ onComplete }) => {
  const [logs, setLogs] = useState([]);
  const [isExiting, setIsExiting] = useState(false); // NEW STATE for animation
  const bottomRef = useRef(null);

  const bootSequence = [
    { text: 'INITIALIZING KERNEL...', delay: 100 },
    { text: 'VERIFYING ENCRYPTION KEYS... [OK]', delay: 300 },
    { text: 'LOADING REACT_DOM...', delay: 500 },
    { text: 'MOUNTING VIRTUAL ENVIRONMENT...', delay: 200 },
    { text: 'SCANNING FOR THREATS... [CLEAN]', delay: 600 },
    { text: 'CONFIGURING PORT 3000...', delay: 200 },
    { text: 'FETCHING ASSETS FROM /PUBLIC...', delay: 400 },
    { text: 'DECRYPTING USER_PROFILE.DAT...', delay: 300 },
    { text: 'ESTABLISHING SECURE CONNECTION...', delay: 500 },
    { text: 'ACCESS GRANTED. WELCOME, ALEX.', delay: 800 }
  ];

  useEffect(() => {
    let currentIndex = 0;

    const runSequence = () => {
      if (currentIndex >= bootSequence.length) {
        // Sequence finished. Start the "Exit" animation.
        setIsExiting(true);
        
        // Wait for the slide-up animation (800ms) to finish before actually removing the component
        setTimeout(onComplete, 800); 
        return;
      }

      const { text, delay } = bootSequence[currentIndex];
      const randomDelay = delay + Math.random() * 200;

      setTimeout(() => {
        setLogs(prev => [...prev, text]);
        currentIndex++;
        runSequence();
      }, randomDelay);
    };

    runSequence();
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [logs]);

  return (
    <div 
      className={`fixed inset-0 bg-black z-[9999] p-8 md:p-12 font-mono text-xs md:text-sm text-neon-green overflow-hidden flex flex-col justify-end items-start cursor-wait transition-transform duration-700 ease-in-out ${
        isExiting ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      
      {/* Background Matrix/Scanlines */}
      <div className="absolute inset-0 pointer-events-none bg-[length:100%_4px] bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,#00ff4110_2px,#00ff4110_4px)]"></div>
      
      {/* Content Container - Fades out slightly as the screen slides up */}
      <div className={`relative z-10 w-full max-w-2xl space-y-1 transition-opacity duration-300 ${isExiting ? 'opacity-0' : 'opacity-100'}`}>
        <div className="mb-4 text-neon-green/50">
           CyberPort OS v1.0.4 (tty1)<br/>
           Login: guest_user
        </div>

        {logs.map((log, i) => (
          <div key={i} className="flex gap-2">
            <span className="text-neon-pink opacity-80">
              [{new Date().toLocaleTimeString('en-US', { hour12: false, fractionalSecondDigits: 2 })}]
            </span>
            <span className="typing-effect">{log}</span>
          </div>
        ))}
        
        <div className="flex gap-2 animate-pulse" ref={bottomRef}>
            <span className="text-neon-pink">root@dev:~#</span>
            <span className="bg-neon-green w-2 h-4 block"></span>
        </div>
      </div>
    </div>
  );
};

export default BootLoader;