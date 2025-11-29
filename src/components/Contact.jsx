import React, { useState } from 'react';
import emailjs from '@emailjs/browser'; // <--- FIX 1: IMPORT ADDED

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // <--- FIX 2: STATE ADDED
  const [isSending, setIsSending] = useState(false); 

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true); // Now this works because we defined it above

    // YOUR ACTUAL KEYS (Do not change these, they are correct)
    const serviceID = 'service_y5g2jmk';
    const templateID = 'template_flid7w8';
    const publicKey = 'cGIX4TIrgtkEeLHBd';

    // Create a temporary object to match EmailJS template variables
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    };

    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('TRANSMISSION_SUCCESS: Message received by server.');
        setFormData({ name: '', email: '', message: '' }); // Clear form
        setIsSending(false);
      })
      .catch((err) => {
        console.log('FAILED...', err);
        alert('TRANSMISSION_ERROR: Connection failed. Check console.');
        setIsSending(false);
      });
  };

  return (
    <section id="contact" className="py-20">
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
              USER@CYBERPORT:~/CONTACT
            </div>
            <div className="w-10"></div>
          </div>

          {/* 2. Main Content (Split View) */}
          <div className="grid md:grid-cols-2">
            
            {/* LEFT SIDE: Secure Channels */}
            <div className="p-8 border-b md:border-b-0 md:border-r border-neon-green/20 bg-neon-green/5">
              
              <h3 className="text-neon-cyan font-mono text-sm mb-6 flex items-center gap-2 tracking-wider">
                <span className="text-neon-pink">./</span> SECURE_CHANNELS
              </h3>

              <div className="space-y-4">
                
                {/* Email Card - UPDATED to your email */}
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

                {/* LinkedIn Card */}
                <a href="#" target="_blank" className="group block p-4 border border-neon-green/20 bg-black/40 hover:bg-neon-green/10 hover:border-neon-green/60 transition-all duration-300">
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

                {/* GitHub Card */}
                <a href="#" target="_blank" className="group block p-4 border border-neon-green/20 bg-black/40 hover:bg-neon-green/10 hover:border-neon-green/60 transition-all duration-300">
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

              {/* Encryption Key Decor */}
              <div className="mt-8 p-3 border border-dashed border-neon-green/20 rounded bg-black/20 text-[10px] font-mono text-neon-green/40">
                <p>PGP: 0xABC123DEF456</p>
                <p>SSH: SHA256:yk9...</p>
              </div>

            </div>

            {/* RIGHT SIDE: Transmission Form */}
            <div className="p-8 bg-black">
              
              <h3 className="text-neon-cyan font-mono text-sm mb-6 flex items-center gap-2 tracking-wider">
                <span className="text-neon-pink">./</span> INITIALIZE_TRANSMISSION
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Name Input */}
                <div className="relative group">
                  <label className="text-[10px] text-neon-green/60 font-mono uppercase mb-1 block group-focus-within:text-neon-green transition-colors">
                    {'>'} Enter_Identity
                  </label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-neon-green/30 py-2 text-neon-green font-mono focus:outline-none focus:border-neon-green transition-colors placeholder-neon-green/20"
                    placeholder="Name or Alias..."
                    required
                  />
                </div>

                {/* Email Input */}
                <div className="relative group">
                  <label className="text-[10px] text-neon-green/60 font-mono uppercase mb-1 block group-focus-within:text-neon-green transition-colors">
                    {'>'} Enter_Coordinates
                  </label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-neon-green/30 py-2 text-neon-green font-mono focus:outline-none focus:border-neon-green transition-colors placeholder-neon-green/20"
                    placeholder="Email Address..."
                    required
                  />
                </div>

                {/* Message Input */}
                <div className="relative group">
                  <label className="text-[10px] text-neon-green/60 font-mono uppercase mb-1 block group-focus-within:text-neon-green transition-colors">
                    {'>'} Upload_Payload
                  </label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full bg-transparent border-b border-neon-green/30 py-2 text-neon-green font-mono focus:outline-none focus:border-neon-green transition-colors placeholder-neon-green/20 resize-none"
                    placeholder="Message content..."
                    required
                  ></textarea>
                </div>

                {/* Submit Button - UPDATED to handle loading state */}
                <button 
                  type="submit"
                  disabled={isSending}
                  className="w-full mt-4 py-3 border border-neon-green text-neon-green font-mono font-bold tracking-wider hover:bg-neon-green hover:text-black transition-all duration-300 uppercase flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-wait"
                >
                  <span className="animate-pulse group-hover:animate-none">[</span> 
                  {isSending ? 'TRANSMITTING...' : 'SEND_TRANSMISSION'} 
                  <span className="animate-pulse group-hover:animate-none">]</span>
                </button>

              </form>

            </div>

          </div>
        </div>
        {/* --- TERMINAL CONTAINER END --- */}

      </div>
    </section>
  );
};

export default Contact;