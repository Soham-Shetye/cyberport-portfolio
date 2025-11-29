/*import React from 'react';

const GlitchText = ({ text, as: Tag = 'h1', className = '' }) => {
  return (
    <Tag className={`glitch-wrapper ${className}`}>
      <span 
        className="glitch relative inline-block text-white" 
        data-text={text}
      >
        {text}
      </span>
      {/* Screen reader only text if needed, but the span above is visible. 
          The pseudo-elements in CSS handle the duplicates visually. 
          Ensure CSS pseudo-elements content isn't read by all SRs, 
          but technically CSS generated content support varies. 
          If we had actual DOM nodes for glitch layers, we would aria-hide them.
          Current CSS approach is generally safe for SRs. 
    </Tag>
  );
};

export default GlitchText; */

import React from 'react';

const GlitchText = ({ text, as: Tag = 'h1', className = '' }) => {
  return (
    <Tag className={`glitch-wrapper ${className}`}>
      <span 
        className="glitch relative inline-block" 
        data-text={text}
      >
        {text}
      </span>
    </Tag>
  );
};

export default GlitchText;