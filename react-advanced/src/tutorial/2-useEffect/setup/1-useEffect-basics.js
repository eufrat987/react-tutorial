import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [ value, setValue ] = useState(0)
  
  const clickHandler = () => {
    setValue(value+1)
  }

  useEffect(() => {
    document.title = 'mess' + value
  }, [value])

  return (
    <>
    <h1>{value}</h1>
    <button className="btn " onClick={clickHandler}> Click me</button>
    </>
  )
};

export default UseEffectBasics;
