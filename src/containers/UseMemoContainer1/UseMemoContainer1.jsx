import React, { useState, useCallback, useMemo } from 'react';

const getNumber = () => {
  console.log('getNumber Function');
  const candidate = Array(45).fill().map((v, i) => i + 1);
  const shuffle = [];
  while (candidate.length > 0) {
    shuffle.push(candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0]);
  }
  const winNumbers = shuffle.slice(0, 6).sort((p, c) => p - c);
  return winNumbers;
}

const UseCallbackContainer1 = () => {
  const [number, setNumber] = useState('0');

  const lottoNumber = getNumber();
  // const lottoNumber = useMemo(() => getNumber(), []);

  const handleChange = (e) => {
    setNumber(e.target.value);
  };  

  return (
    <>
      <div>
        <ul>
          {lottoNumber.map((e, i) => {
            return <li key={i}>{ e }</li>
          })}
        </ul>
        <input value={ number} onChange={ handleChange } type="number"/>
        <p>{number}</p>
      </div>
    </>
  )
};

export default UseCallbackContainer1;