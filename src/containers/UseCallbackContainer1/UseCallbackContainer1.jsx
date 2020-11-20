import React, { useState, useCallback, useMemo } from 'react';

const getAverage = numbers => {
  console.log('평균값 계산중 ...');
  if(numbers.length === 0) return 0;
  const sum = numbers.reduce((a,b) => a + b);
  return sum / numbers.length;
}

const UseCallbackContainer1 = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState('');

  const handleChange = useCallback((e) => {
    setNumber(e.target.value);
  }, []);  //컴포넌트가 처음 렌더링 될 때만 함수 생성
  
  const handleClick = useCallback(() => {
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber('');
  }, [number, list]);    // number 혹은 list 가 바뀌었을때만 함수 생성

  const average = useMemo(() => getAverage(list), [list]);

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
        <b>평균값: </b>{average}
      </div>
    </>

  )

  
};

export default UseCallbackContainer1;