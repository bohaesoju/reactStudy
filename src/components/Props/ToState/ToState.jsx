import React from 'react';

const ToState = (props) => {
  const { onChangeValue, value } = props;
  
  const handleInputChange = (event) => {
    onChangeValue(event.target.value);
  };

  return(
    <>
      <input 
        type="text" 
        onChange={ handleInputChange } 
      />
      <p>{ value }</p>
    </>
  )
}

export default ToState;
