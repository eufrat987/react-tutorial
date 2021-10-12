import React, { useState }  from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  const [ arr, setArr ] = useState(data);

  const clickHandler = (e) => {
    setArr([])
  }

  const itemClickHandler = (id) => {
    let newArr = arr.filter(el => {
      return el.id !== id
    })
    setArr(newArr)
  }

  return ( <>
    {
      arr.map(people => {
        const { id, name } = people
        return (
          <div key={id} className='item'>
            <h4> {name} </h4>
            <button type="button" className='btn' onClick={() => itemClickHandler(id)}>remove</button>
          </div>
        )
      })
    }
    <button type='button'  className='btn' onClick={clickHandler}> Remove all </button>
    </>
  )
};

export default UseStateArray;
