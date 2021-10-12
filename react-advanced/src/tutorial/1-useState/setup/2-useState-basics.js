import React, { useState } from 'react';

const UseStateBasics = () => {
  const [title, setTitle ] = useState('title')

  const clickHandler = () => {
    if(title === 'title') {
      setTitle('aloha')
    } else {
      setTitle('title')
    }
  }

  return(
    <>
    <h2> {title} </h2>
    <button type="button" className='btn' onClick={clickHandler}> Change title </button>
    </>
  )
}

export default UseStateBasics;
