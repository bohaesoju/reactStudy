import React from 'react';
import UseImperativeHandle2 from '../../components/Ref/UseImperativeHandle2';

const UseRefContainer3 = () => {
  const [value, setValue] = React.useState('');
  const inputRef = React.useRef();

  const handleButtonOnClick = () => {
    if(inputRef.current){
      setValue(inputRef.current.getValue());
      inputRef.current.reset()
      inputRef.current.focus()
    }
  }

  return(
    <>
      <UseImperativeHandle2 ref={ inputRef } />
      <button onClick={handleButtonOnClick}>클릭</button>
      <p>{ value }</p>
    </>
  )
}

export default UseRefContainer3;