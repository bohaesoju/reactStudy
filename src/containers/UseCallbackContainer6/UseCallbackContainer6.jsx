import React, { useState, useCallback, useMemo } from 'react';
import TitleChange from '../../components/Memo/TitleChange';

const UseCallbackContainer6 = () => {
  const [number, setNumber] = useState(0);
  const [title, setTitle] = useState('리액트 스터디');

  const handleChange = (e) => {
    setNumber(e.target.value);
  }

  const handleTitleChange = (e) => {
    setTitle(e);
  }

  return (
    <>
      <div>
        <TitleChange 
          productTitle={title}
          titleChange={handleTitleChange}
        />
        <br/>
        <input value={ number} onChange={ handleChange } type="number"/>
        <p>{number}</p>
      </div>
    </>
  )
};

export default UseCallbackContainer6;