import React from 'react';

const UseRef = () => {
  const inputRef = React.useRef();

  React.useEffect(() => {
    inputRef.current.focus();
  }, []);
  
  return(
    <>
      <input type="text" ref={inputRef} />
    </>
  )
}

export default UseRef;