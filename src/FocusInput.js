import React, { useRef } from 'react';

function FocusInput() {
  const inputRef = useRef(null);

  const handleFocusClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Click button to focus me..." />
      <button onClick={handleFocusClick}>Focus the input field</button>
    </div>
  );
}

export default FocusInput;