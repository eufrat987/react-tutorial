import React, { useState } from 'react';
import data from './data';
import List from './List';

function App() {
  const [people, setPeople] = useState(data)

  const clickHandler = () => {
    setPeople((people) => {
      return []
    })
  }

  return (
    <section className="container" style={{margin: '5rem auto'}}>
      <h3> {people.length} birthday today </h3>
      <List data={people}/>
      <button className='btn' onClick={clickHandler}> Clear all</button>
    </section>
  );
}

export default App;
