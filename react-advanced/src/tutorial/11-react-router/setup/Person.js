import React, { useState, useEffect } from 'react';
import { data } from '../../../data';
import { Link, useParams } from 'react-router-dom';
const Person = () => {
  const { id } = useParams()


  return (
    

    <div>
      <h2>{data.filter(n => n.id == id)[0].name }</h2>
    </div>
  );
};

export default Person;
