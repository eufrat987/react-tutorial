import React, { useState } from 'react';

const UseStateCounter = () => {
  const [value, setValue] = useState(0)
  var v = value

  console.log('v',value)

  const complex = () => {
    console.log(v)
    setTimeout(() => {
        v = v+1
        
        setValue(v)
    }, 2000)
  }

  return <>
    <section style={{ margin: '4rem 0', background: '#fff'}}>
      <h2> regular counter </h2>
      <h1> {value} </h1>
      <button className="btn" onClick={() => setValue(value - 1)}> decreace </button>
      <button className="btn" onClick={() => setValue(0)}> reset </button>
      <button className="btn" onClick={() => setValue(value + 1)}> increase </button>
      <button className="btn" onClick={complex}> complex </button>
    </section>
  </>
};

export default UseStateCounter;
