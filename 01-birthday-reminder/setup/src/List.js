import React from 'react';

const List = ({data}) => {
  console.log(data);

  return (
    <>
      {
        data.map(item => <Item {...item}/>)
      }
    </>
  );
};

const Item = ({name, age, image}) => {
  return (
    <article className="person">
      <img src={image} style={{'border-radius': '50%', width: '5rem', height: '5rem' }} alt="" />
      <div>
        <h4>{name}</h4>
        <p>{age}</p>
      </div>
    </article>
  )
}

export default List;
