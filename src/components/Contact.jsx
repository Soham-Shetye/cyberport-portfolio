import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState('idle'); // idle, submitting, success, error
  const [progress, setProgress] = useState(0);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleReset = () => {
    setStatus('idle');
    setProgress(0);
    setFormData({ name: '', email: '', message: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('submitting');
    setProgress(0);

    // Fake encryption animation
    const timer = setInterval(() => {
      setProgress((old) => {
        if (old >= 90) return 90;
        return old + Math.random() * 10;
      });
    }, 200);

    // YOUR KEYS
    const serviceID = 'service_y5g2jmk';
    const templateID = 'template_flid7w8';
    const publicKey = 'cGIX4TIrgtkEeLHBd';

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    };

    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then(() => {
        clearInterval(timer);
        setProgress(100);
        setTimeout(() => {
          setStatus('success');
        }, 500);
      })
      .catch((err) => {
        clearInterval(timer);
        console.log('FAILED...', err);
        setStatus('error');
        alert("TRANSMISSION_ERROR: Connection failed.");
      });
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-5xl mx-auto px-4">
        
        {/* --- TERMINAL CONTAINER --- */}
        <div className="w-full bg-black border border-neon-green/50 rounded-lg overflow-hidden shadow-[0_0_30px_rgba(0,255,65,0.1)]">
          
          {/* Header */}
          <div className="bg-neon-green/10 border-b border-neon-green/30 p-3 flex items-center justify-between select-none">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
            </div>
            <div className="font-mono text-neon-green/60 text-xs tracking-widest">
              USER@CYBERPORT:~/CONTACT
            </div>
            <div className="w-10"></div>
          </div>

          <div className="grid md:grid-cols-2">
            
            {/* LEFT SIDE: Secure Channels */}
            <div className="p-8 border-b md:border-b-0 md:border-r border-neon-green/20 bg-neon-green/5">
              <h3 className="text-neon-cyan font-mono text-sm mb-6 flex items-center gap-2 tracking-wider">
                <span className="text-neon-pink">./</span> SECURE_CHANNELS
              </h3>
              <div className="space-y-4">
                <a href="mailto:shetyesoham07@gmail.com" className="group block p-4 border border-neon-green/20 bg-black/40 hover:bg-neon-green/10 hover:border-neon-green/60 transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-neon-green/10 flex items-center justify-center border border-neon-green/20 group-hover:border-neon-green">
                      <span className="text-neon-green text-lg">@</span>
                    </div>
                    <div>
                      <div className="text-xs text-neon-green/50 font-mono mb-1">EMAIL_RLY</div>
                      <div className="text-neon-green font-mono text-sm group-hover:text-white transition-colors">shetyesoham07@gmail.com</div>
                    </div>
                  </div>
                </a>
                <a href="https://www.linkedin.com/in/soham-shetye-imrich07/" target="_blank" className="group block p-4 border border-neon-green/20 bg-black/40 hover:bg-neon-green/10 hover:border-neon-green/60 transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-neon-green/10 flex items-center justify-center border border-neon-green/20 group-hover:border-neon-green">
                      <span className="text-neon-green text-lg">in</span>
                    </div>
                    <div>
                      <div className="text-xs text-neon-green/50 font-mono mb-1">ZOOM_INFO</div>
                      <div className="text-neon-green font-mono text-sm group-hover:text-white transition-colors">linkedin/soham</div>
                    </div>
                  </div>
                </a>
                <a href="https://github.com/Soham-Shetye" target="_blank" className="group block p-4 border border-neon-green/20 bg-black/40 hover:bg-neon-green/10 hover:border-neon-green/60 transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-neon-green/10 flex items-center justify-center border border-neon-green/20 group-hover:border-neon-green">
                      <span className="text-neon-green text-lg">gh</span>
                    </div>
                    <div>
                      <div className="text-xs text-neon-green/50 font-mono mb-1">REPO_HUB</div>
                      <div className="text-neon-green font-mono text-sm group-hover:text-white transition-colors">github/soham</div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="mt-8 p-3 border border-dashed border-neon-green/20 rounded bg-black/20 text-[10px] font-mono text-neon-green/40">
                <p>PGP: 0xABC123DEF456</p>
                <p>SSH: SHA256:yk9...</p>
              </div>
            </div>

            {/* RIGHT SIDE: Dynamic Area */}
            <div className="p-8 bg-black relative flex flex-col justify-center min-h-[450px]">
              
              <h3 className="text-neon-cyan font-mono text-sm mb-6 flex items-center gap-2 tracking-wider absolute top-8 left-8">
                <span className="text-neon-pink">./</span> 
                {status === 'idle' ? 'INITIALIZE_TRANSMISSION' : 
                 status === 'submitting' ? 'ENCRYPTING_DATA...' : 
                 'TRANSMISSION_LOG'}
              </h3>

              {/* 1. SUCCESS VIEW (The Fix) */}
              {status === 'success' ? (
                <div className="space-y-6 font-mono text-xs md:text-sm text-neon-green mt-8">
                  <div className="space-y-2">
                    <p className="animate-pulse">{'>'} UPLOADING_PAYLOAD... [100%]</p>
                    <p>{'>'} VERIFYING_HANDSHAKE... [OK]</p>
                    <p>{'>'} SERVER_RESPONSE: 200 OK</p>
                  </div>
                  
                  <div className="border-t border-neon-green/30 pt-4">
                    <p className="text-neon-cyan text-base font-bold mb-2">TRANSMISSION COMPLETE.</p>
                    <p className="text-neon-green/60">Thank you, User. System will respond shortly.</p>
                  </div>

                  {/* THIS IS THE RESET BUTTON - NOW BIG AND OBVIOUS */}
                  <button 
                    onClick={handleReset}
                    className="w-full py-3 mt-6 bg-neon-green/10 border border-neon-green hover:bg-neon-green hover:text-black transition-all duration-300 font-bold tracking-widest flex items-center justify-center gap-2 group"
                  >
                    <span className="group-hover:animate-spin">⟳</span> 
                    INITIALIZE_NEW_TRANSMISSION
                  </button>
                </div>
              ) : status === 'submitting' ? (
                /* 2. LOADING VIEW */
                <div className="flex flex-col items-center justify-center space-y-4">
                   <div className="w-full h-1 bg-neon-green/20 relative overflow-hidden">
                      <div 
                        className="absolute top-0 left-0 h-full bg-neon-green shadow-[0_0_10px_#00ff41] transition-all duration-200"
                        style={{ width: `${progress}%` }}
                      ></div>
                   </div>
                   <div className="text-neon-green/60 text-xs font-mono animate-pulse">
                      UPLOADING_PACKETS: {Math.floor(progress)}%
                   </div>
                </div>
              ) : (
                /* 3. FORM VIEW */
                <form onSubmit={handleSubmit} className="space-y-6 mt-8">
                  <div className="relative group">
                    <label className="text-[10px] text-neon-green/60 font-mono uppercase mb-1 block group-focus-within:text-neon-green transition-colors">{'>'} Enter_Identity</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full bg-transparent border-b border-neon-green/30 py-2 text-neon-green font-mono focus:outline-none focus:border-neon-green transition-colors placeholder-neon-green/20" placeholder="Name or Alias..." />
                  </div>
                  <div className="relative group">
                    <label className="text-[10px] text-neon-green/60 font-mono uppercase mb-1 block group-focus-within:text-neon-green transition-colors">{'>'} Enter_Coordinates</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full bg-transparent border-b border-neon-green/30 py-2 text-neon-green font-mono focus:outline-none focus:border-neon-green transition-colors placeholder-neon-green/20" placeholder="Email Address..." />
                  </div>
                  <div className="relative group">
                    <label className="text-[10px] text-neon-green/60 font-mono uppercase mb-1 block group-focus-within:text-neon-green transition-colors">{'>'} Upload_Payload</label>
                    <textarea name="message" value={formData.message} onChange={handleChange} required rows="4" className="w-full bg-transparent border-b border-neon-green/30 py-2 text-neon-green font-mono focus:outline-none focus:border-neon-green transition-colors placeholder-neon-green/20 resize-none" placeholder="Message content..."></textarea>
                  </div>
                  <button type="submit" className="w-full mt-4 py-3 border border-neon-green text-neon-green font-mono font-bold tracking-wider hover:bg-neon-green hover:text-black transition-all duration-300 uppercase flex items-center justify-center gap-2 group">
                    <span className="animate-pulse group-hover:animate-none">[</span> 
                    SEND_TRANSMISSION 
                    <span className="animate-pulse group-hover:animate-none">]</span>
                  </button>
                </form>
              )}

            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;