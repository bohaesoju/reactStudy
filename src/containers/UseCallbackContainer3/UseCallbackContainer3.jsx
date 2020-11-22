import React, { useState, useCallback, useMemo } from 'react';
import Input from '../../components/Memo/Input';

const UseCallbackContainer3 = () => {
  const [fruit, setFruit] = useState('apple');
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  }

  const handleChange = useCallback((fruit) => {
    setFruit(fruit)
  }, []);

  return (
    <>
      <p>count: {count}</p>
      <button onClick={ handleClick }>증가</button>
      <Input 
        fruit={ fruit }
        onChange={ handleChange }
      />
    </>

  )
};

export default UseCallbackContainer3;