import React, { useEffect, useRef } from 'react';

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {
  const refContainer = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
  }
  return <>
  <form action="" className="form" onSubmit={handleSubmit}>
    <input type="text" ref={refContainer/>
    <button type="button" className="btn">submit</button>
  </form>
  </>;
};

export default UseRefBasics;
