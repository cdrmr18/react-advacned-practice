import React, { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'kate', 
    age: 30, 
    message: 'hello you'
  });

  const changeMessage = () => {
    setPerson({...person, message: "new message", name: "james"});
  }
  return (
    <di>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3>
      <button className="btn" onClick={changeMessage}>
        Update
      </button>
    </di>);
};

export default UseStateObject;
