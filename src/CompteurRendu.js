import React, { useState, useRef, useEffect } from 'react';

function CompteurRendu() {
  const [text, setText] = useState('');
  const renderCount = useRef(1);

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  });

  return (
    <div>
      <input 
        type="text" 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
        placeholder="Type something here..." 
      />
      <p>Component has rendered <strong>{renderCount.current}</strong> times.</p>
    </div>
  );
}

export default CompteurRendu;