import React, { useState, useEffect, useRef } from 'react';

const TerminalWindow = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState([
    '> Initializing secure connection...',
    '> Connection established.',
    '> Type "help" for available commands.'
  ]);
  const terminalRef = useRef(null);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [output]);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newOutput = [...output, `> ${input}`];
    
    // Simple command processing
    switch(input.toLowerCase()) {
      case 'help':
        newOutput.push(
          'Available commands:',
          '  help - Show this help message',
          '  whoami - Display user information',
          '  contact - Show contact information',
          '  clear - Clear the terminal'
        );
        break;
      case 'whoami':
        newOutput.push(
          'User: Alex_Cyber',
          'Role: Senior Security Engineer',
          'Status: ACTIVE'
        );
        break;
      case 'contact':
        newOutput.push(
          'Secure Email: alex@cyberportfolio.sec',
          'PGP Key: 0xABC123DEF456',
          'Signal: Available upon request'
        );
        break;
      case 'clear':
        setOutput(['> Terminal cleared.']);
        setInput('');
        return;
      default:
        newOutput.push(`Command not found: ${input}. Type "help" for available commands.`);
    }
    
    setOutput(newOutput);
    setInput('');
  };

  return (
    <div className="bg-black border border-neon-green/30 h-64 overflow-hidden">
      <div className="p-4 h-full flex flex-col">
        <div 
          ref={terminalRef}
          className="font-mono text-neon-green text-sm flex-grow overflow-y-auto mb-2"
        >
          {output.map((line, index) => (
            <div key={index}>{line}</div>
          ))}
        </div>
        <form onSubmit={handleSubmit} className="flex">
          <span className="text-neon-green mr-2">{'>'}</span>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-grow bg-transparent border-none outline-none text-neon-green font-mono"
            autoFocus
          />
        </form>
      </div>
    </div>
  );
};

export default TerminalWindow;