import React from 'react';
import UseRef from './UseRef';
import UseRef2 from './UseRef2';
import UseRef3 from './UseRef3';
import CallbackRef from './CallbackRef';
import CallbackRef2 from './CallbackRef2';
import ForwardRef from './ForwardRef';
import UseImperativeHandle from './UseImperativeHandle';
import UseImperativeHandle2 from './UseImperativeHandle2';

const Ref = () => {
  const inputRef = React.useRef();
  const jobRef = React.useRef();

  const handleButtonClick = () => {
    if(jobRef.current){
      console.log('job length is : ' , jobRef.current.getNameLength());
      jobRef.current.addCount(5);
    }
  }

  const handleButtonOnClick = () => {
    if(inputRef.current){
      console.log('input value is : ' , inputRef.current.getValue());
      inputRef.current.reset()
      inputRef.current.focus()
    }
  }

  return(
    <>
      {/* <UseRef /> */}
      {/* <UseRef2 /> */}
      {/* <UseRef3 /> */}
      {/* <CallbackRef /> */}
      {/* <CallbackRef2 /> */}
      {/* <ForwardRef ref={inputRef} /> */}
      {/* <UseImperativeHandle ref={ jobRef } /> */}
      {/* <button onClick={handleButtonClick}>버튼</button> */}
      <UseImperativeHandle2 ref={ inputRef } />
      <button onClick={handleButtonOnClick}>클릭</button>
    </>
  )
}

export default Ref;