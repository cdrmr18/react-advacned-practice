import React, { useState } from 'react';

const UseStateCounter = () => {
  const [value, setValue] = useState(0);
  const handleIncrease = () => {
    let newValue = value + 1;
    setValue(newValue);
  }
  const handleReset= () => {
    setValue(0);
  }
  const handleIDecrease= () => {
    let newValue = value - 1;
    setValue(newValue);
  }
  return (
    <div>
      <section style={{margin: '4rem'}}>
        <h2>Counter</h2>
        <h1>{value}</h1>
        <button className='btn' onClick={handleIncrease}>Increase</button>
        <button className='btn' onClick={handleReset}>Reset</button>
        <button className='btn' onClick={handleIDecrease}>Decrease</button>
      </section>
    </div>
  )
};

export default UseStateCounter;
