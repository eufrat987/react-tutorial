import React from 'react';

const ErrorExample = () => {
  let title = 'useState error example'
  const changeTitle = () => {
    title = 'changed'
    console.log('ccc')
  }

  return (
    <>
    <h2 > {title} </h2>
    <button type="button" className='btn' onClick={changeTitle}> Click me </button>
    </>
  )
};

export default ErrorExample;
