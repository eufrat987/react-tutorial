import React, { useState, useEffect } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';


const MultipleReturns = () => {
  const [ loading, setLoading ] = useState(true);
  const [ isError, setIsError ] = useState(false); 
  const [ user, setUser ] = useState(undefined);

  useEffect(() => {
    fetch(url)
    .then(response => {
      if(response.status >= 200 && response.status < 300) {
        return response.json()
      }
      // setIsError(true);
      throw new Error(response.status)
    })
    .then(json => {
      console.log('ola',json)
      setUser(json.name)
    })
    .catch(error => {
      setIsError(true);
    }).finally(() => {
      setLoading(false);
    })

  }, [])

  if(isError) {
    return <h2>Error...</h2>
  }

  if(loading) {
    return <h2>Loading...</h2>
  }

  return <h2> {user} </h2>;
};

export default MultipleReturns;
