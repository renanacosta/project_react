import React from 'react';
import './GenericInputs.css';

const GenericInput = ({label, id, type, placeholder, ...props}) => {
  return (
    <>
      <label className="labels" htmlFor={id}>
        {label}
      </label>
      <input
        className="inputs"
        type={type}
        id={id}
        placeholder={placeholder}
        {...props}
       
      />
    </>
  );
};

export default GenericInput;