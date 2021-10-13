import React, { useState, useEffect } from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [ size, setSize ] = useState(window.innerWidth)

  useEffect(() => {
    window.addEventListener('resize', () => {
      setSize(window.innerWidth)
    })
  }, [])

  console.log(size)

  return <h2>{size}</h2>;
};

export default UseEffectCleanup;
