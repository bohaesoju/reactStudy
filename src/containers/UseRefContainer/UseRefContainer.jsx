import React from 'react';
import UseRef from '../../components/Ref/UseRef';
import UseRef2 from '../../components/Ref/UseRef2';
import UseRef3 from '../../components/Ref/UseRef3';
import ForwardRef from '../../components/Ref/ForwardRef';
import CallbackRef from '../../components/Ref/CallbackRef';
import CallbackRef2 from '../../components/Ref/CallbackRef2';
import Class1 from '../../components/Class/Class1';
import HooksRef from '../../components/Class/HooksRef';

const UseRefContainer = () => {
  const inputRef = React.useRef();

  return (
    <>
      {/* <UseRef /> */}
      {/* <UseRef2 /> */}
      {/* <UseRef3 /> */}
      {/* <Class1 /> */}
      {/* <HooksRef /> */}
      <ForwardRef ref={inputRef} />
      {/* <CallbackRef /> */}
      {/* <CallbackRef2 /> */}
    </>
  )
};

export default UseRefContainer;