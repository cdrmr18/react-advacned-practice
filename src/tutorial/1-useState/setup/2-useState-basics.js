import React, { useState } from 'react';

const UseStateBasics = () => {
  const [text, setText] = useState('Hi there');
  const handleClick = () => {
    if (text === 'Hi there') {
      setText('Kathy');
    } else {
      setText('Hi there');
    }
    
  }
  return (
    <React.Fragment>
      <h2>{text}</h2>
      <button type='button' className="btn" onClick={handleClick}>
        CHange title
      </button>
    </React.Fragment>
  )
};

export default UseStateBasics;
