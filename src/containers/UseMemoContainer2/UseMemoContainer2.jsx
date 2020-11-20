import React, { useState, useCallback, useMemo } from 'react';

const getAverage = numbers => {
  console.log('getAverage Function');
  if(numbers.length === 0) return 0;
  const sum = numbers.reduce((a,b) => a + b);
  return sum / numbers.length;
}

const UseMemoContainer2 = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState('');
  const [average, setAverage] = useState(0);

  const handleChange = (e) => {
    setNumber(e.target.value);
  };
  
  const handleClick = () => {
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber('');
  };

  const handleClick2 = () => {
    setAverage(getAverage(list));
  };


  // const average = () => getAverage(list);
  // const average = useMemo(() => getAverage(list), [list]);

  return (
    <>
      <div>
        <input value={ number} onChange={ handleChange } type="number"/>
        <button onClick={ handleClick }>등록</button>
        <ul>
          {list.map((value, index) => (
            <li key={index}>{ value }</li>
          ))}
        </ul>
        <button onClick={ handleClick2 }>계산</button>
        <b>평균값: {average}</b>
      </div>
    </>

  )
};

export default UseMemoContainer2;