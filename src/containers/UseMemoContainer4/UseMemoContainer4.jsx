import React, { useState, useCallback, useMemo } from 'react';
import Title from '../../components/Memo/Title';

const UseMemoContainer4 = () => {
  const [number, setNumber] = useState(0);

  const handleChange = (e) => {
    setNumber(e.target.value);
  }

  const title = '리액트 스터디';

  return (
    <>
      <div>
        <Title productTitle={title}/>
        <br/>
        <input value={ number} onChange={ handleChange } type="number"/>
        <p>{number}</p>
      </div>
    </>
  )
};

export default UseMemoContainer4;