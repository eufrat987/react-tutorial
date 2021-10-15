import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [userList, setUserList] = useState([]);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if(firstName && email) {

      const newU = {firstName, email}

      setUserList(currList => {
        return [...currList, newU];
      })

    }
    
  }

  return (
    <>
    
      <article>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-controll">
            <label htmlFor="firstName"> Name : </label>
            <input type="text" id="firstName" name="firstName" 
            value={firstName} onChange={ (e) => setFirstName(e.target.value) }/>
          </div> 

          <div className="form-controll">
            <label htmlFor="email"> email : </label>
            <input type="text" id="email" name="email"
            value={email} onChange = {(e) => setEmail(e.target.value)} />
          </div>

          <button type="submit" className="btn"> sub</button>
        </form>

        {
          userList.map((user, idx) => (<div className="item" key={idx}>
            <h4>{user.firstName}</h4>
            <p>{user.email}</p>
          </div> ))
        }

      </article>
    </>
  )
};

export default ControlledInputs;
