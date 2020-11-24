import React from 'react';
import Count from '../../components/Ref/Count';

const UseRefContainer2 = () => {
  const jobRef = React.useRef();

  const handleButtonClick = () => {
    if(jobRef.current){
      jobRef.current.addCount(5);
    }
  }

  return (
    <>
      <Count ref={ jobRef } />
      <button onClick={handleButtonClick}>버튼</button>
    </>
  )
};

export default UseRefContainer2;