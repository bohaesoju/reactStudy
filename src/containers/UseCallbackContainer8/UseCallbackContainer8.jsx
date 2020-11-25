import React, { useState, useCallback, useMemo } from 'react';
import Input2 from '../../components/Memo/Input2';

const UseCallbackContainer8 = () => {
  const [count, setCount] = useState(0);
  const [title, setTitle] = useState('리액트 스터디');

  const handleClick = useCallback(() => {
    setCount(count + 1);
  },[]);

  const handleChange = (e) => {
    setTitle(e.target.value)
  };

  return (
    <>
      <div>
        <Input2
          count={count}
          onClick={ handleClick }
        />
        <br/>
        <input value={ title} onChange={ handleChange } type="text"/>
        <p>{title}</p>
      </div>
    </>
  )
};

export default UseCallbackContainer8;