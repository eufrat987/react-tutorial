import React, { useEffect } from 'react';

const Modal = ({text, closeModal}) => {

  useEffect(() => {
    setTimeout(() => {
      closeModal()
    }, 1000)
  },[]) 

  return <div className="modal"> {text} </div>;
};

export default Modal;
