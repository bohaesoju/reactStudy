import React, { useState, useCallback, useMemo } from 'react';
import Numbers from '../../components/Memo/Numbers';

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

const UseCallbackContainer5 = () => {
  const lottoNumber = useMemo(() => getNumber(), []);
  const [winNumber, setWinNumber] = useState(lottoNumber);
  const [number, setNumber] = useState(0);
  
  // const lottoNumber = getNumber();
  // const lottoNumber = useMemo(() => getNumber(), []);

  const handleChange = (e) => {
    setNumber(e.target.value);
  };  

  const handleClick = useCallback(() => {
    console.log('handleClick');
    setWinNumber(getNumber())
  }, [])

  return (
    <>
      <div>
        <input value={ number} onChange={ handleChange } type="number"/>
        <p>{number}</p>
        <Numbers 
          lottoNumber={winNumber}
        />
        <button onClick={ handleClick }>번호생성기</button>
      </div>
    </>
  )
};

export default UseCallbackContainer5;