import React, { useEffect, useRef } from 'react';

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {
  const refContainer = useRef(null)

  useEffect(() => {
    console.log(refContainer.current)
  })

  return <h2 ref = {refContainer}>useRef</h2>;
};

export default UseRefBasics;
