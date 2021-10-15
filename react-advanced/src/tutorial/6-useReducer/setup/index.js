import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { data } from '../../../data';
// reducer function
import { reducer } from './reducer';

const defaultState = {
  people: data,
  showModal: false,
  modalText: 'aloha' 
}

const Index = () => {
  // const [people, setPeople] = useState(data)
  // const [showModel, setShowModal] = useState(false)
  const [name, setName] = useState('')

  const [state, dispatch] = useReducer(reducer, defaultState)

  const handleSubmit = (e) => {
    e.preventDefault();

    if(name) {
      dispatch({ type: 'TEST', name: name})
    } else{
      dispatch({ type: 'NONAME'})
    }
  }

  const closeModal = () => {
    console.log('closeddd')
    dispatch({ type: 'CLOSE'})
  }

  return <>
        { state.showModal && <Modal closeModal = { closeModal } text = {state.modalText} /> }

        <form className="form" onSubmit={handleSubmit}>
            <input type="text" value={name} onChange={(e) => setName(e.target.value) } />
            <button type="submit" className="btn"> Add </button>
          </form> 

          {
            state.people.map(person => 
            <div key={person.id}> 
            <h4>{person.name}</h4> 
            <button className="btn" onClick={() => dispatch({ type: 'REMOVE', id: person.id})}> Remove </button>
            </div> )
          }
      </>
};

export default Index;
