import React from 'react';

const CallbackRef = () => {
  
  return(
    <>
      <input type="text" ref={ref => ref.focus()} />
    </>
  )
}

export default CallbackRef;