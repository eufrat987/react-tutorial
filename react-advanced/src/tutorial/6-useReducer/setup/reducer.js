
export const reducer = (state, action) => {
  console.log(state, action);

  if(action.type == 'TEST') {
    const { name } = action
    return {
      ...state,
      people: [...state.people, {id: new Date().getTime().toString(), name: name} ],
      showModal: true,
      modalText: 'added'
    } 
  } else if(action.type == 'NONAME') {
    return { 
      ...state,
      showModal: true,
      modalText: 'Enter name'
    }
  } else if(action.type == 'CLOSE') {
    return {
      ...state,
      showModal: false,
    }
  } else if(action.type == 'REMOVE') {
    const { id } = action
    return {
      ...state,
      showModal: true,
      modalText: 'removed',
      people: state.people.filter((person) => person.id !== id)
    }
  }

  throw new Error('action type error')
}

