import React, { useState } from "react";

function a() {
  const [size, setsize] = useState(16);

  return (
    <div>
      <p style={{ fontSize: `${size}px` }}>
        This text will change size when you click the buttons.
      </p>

      <button onClick={() => setsize(size + 2)}>+</button>
      <button onClick={() => setsize(size - 2)} >- </button>
        
     
    </div>
  );
}

export default a;
