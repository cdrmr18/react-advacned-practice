import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);

  useEffect(()=> {
    console.log('effect');
    if (value > 1) {
      document.title = `New Message(${value})`;
    }
  }, [value]);
  
  return (
    <div>
      <h1>{value}</h1>
      <button className="btn" onClick={()=>setValue(value + 1)}>Submit</button>
    </div>
  )
};

export default UseEffectBasics;
