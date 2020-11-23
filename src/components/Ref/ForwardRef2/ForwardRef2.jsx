import React from 'react';

const ForwardRef2 = React.forwardRef((props, ref) => {

  const handleButtonClick = () => {
    ref.current.value = '';
    ref.current.focus();
  };

  return (
    <>
      <input ref={ref} />
      <button onClick={handleButtonClick}>Send</button>
    </>
  );
})

export default ForwardRef2;