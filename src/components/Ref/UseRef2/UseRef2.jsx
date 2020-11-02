import React from 'react';

const UseRef2 = () => {
  const inputRef = React.useRef();

  const handleButtonClick = () => {
    inputRef.current.value='';
    inputRef.current.focus();
    console.log('inputRef', inputRef);
  };
  
  return(
    <>
      <input type="text" ref={inputRef} />
      <button onClick={handleButtonClick}>저장</button>
    </>
  )
}

export default UseRef2;