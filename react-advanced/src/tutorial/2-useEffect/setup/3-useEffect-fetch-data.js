import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users';

const UseEffectFetchData = () => { 
  const [users, setUsers] = useState([])

  const getData = async () => {
    const resp = await fetch(url)
    const json = await resp.json()
    setUsers(json)
  }

  useEffect(() => {
    getData()
  
  },[])

  return <>
        <ul className="users" >
          {
                users.map(u => <li key={u.id}>
                   <img src={u.avatar_url} alt="" />
                   <div>
                     <h4>{u.login}</h4>
                     <a href={u.html_url}>dsa</a>
                   </div>
                </li>)
          }

        </ul>
    </>
};

export default UseEffectFetchData;
