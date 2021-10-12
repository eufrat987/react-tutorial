import React, { useState } from 'react';

const UseStateObject = () => {
  const [ person, setPerson ] = useState({
    name: 'john',
    age: 22,
    massage: 'aaloha'
  })

  const clickHandler = () => {
    setPerson({...person, massage: 'new mess'})
  }

  return ( <>
    <h1>{person.name}</h1>
    <h1>{person.age}</h1>
    <h1>{person.massage}</h1>
    <button type="button" className='btn' onClick={clickHandler}> likc</button>
    </>
  )
};

export default UseStateObject;
