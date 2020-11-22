import React, { useState, useCallback, useMemo } from 'react';
import Input2 from '../../components/Memo/Input2';

const UseCallbackContainer2 = () => {
  const [fruit, setFruit] = useState('banana');
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log('handleClick')
    setCount(count + 1);
  }, [count]);

  const handleChange = (e) => {
    console.log('handleChange')
    setFruit(e.target.value)
  };

  return (
    <>
      <Input2
        count={count}
        onClick={ handleClick }
      />
      <br/>
      <input onChange={ handleChange } type="text"/>
      <p>{fruit}</p>
    </>
  )
};

export default UseCallbackContainer2;