import React from 'react';

const ToState = (props) => {
  const { onChangeValue } = props;
  
  const handleInputChange = (event) => {
    onChangeValue(event.target.value);
  };

  return(
    <>
      <input 
        type="text" 
        onChange={ handleInputChange } 
      />
    </>
  )
}

export default ToState;
