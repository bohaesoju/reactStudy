import React, { useState, useCallback, useMemo } from 'react';

const UseMemoContainer3 = () => {
  const [string, setString] = useState('');
  const [stringList, setStringList] = useState([]);

  const handleChange = (e) => {
    setString(e.target.value);
  }

  const handleClick = () => {
    const newList = stringList.slice();
    newList.push(string);
    setStringList(newList);
  }

  const sum = (list) => {
    console.log('sum Function');
    let stringSum = '';
    for(let value of list) {
      stringSum += value + ' ';
    }
    return stringSum;
  }

  // const result = useMemo(() => sum(stringList), [stringList]);
  const result = useMemo(() => sum(stringList), []);

  return (
    <>
      <div>
        <input type='text' onChange={handleChange}/>
        <button onClick={handleClick}>추가</button>
        <p>{result}</p>
      </div>
    </>
  )
};

export default UseMemoContainer3;