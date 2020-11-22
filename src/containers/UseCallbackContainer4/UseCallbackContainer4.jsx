import React, { useState, useCallback, useMemo } from 'react';

const UseCallbackContainer4 = () => {
  const [string, setString] = useState('');
  const [stringList, setStringList] = useState([]);

  const handleChange = useCallback((e) => {
    setString(e.target.value);
  }, []);

  const handleClick = useCallback(() => {
    const newList = stringList.slice();
    newList.push(string);
    setStringList(newList);
  }, [string, stringList])

  const sum = useCallback((list) => {
    console.log('sum Function');
    let stringSum = '';
    for(let value of list) {
      stringSum += value + ' ';
    }
    return stringSum;
  }, []);

  // const result = sum(stringList);
  const result = useMemo(() => sum(stringList), [stringList]);

  return (
    <>
      <div>
        <input type='text' onChange={handleChange}/>
        <button onClick={handleClick}>추가2</button>
        <p>{result}</p>
      </div>
    </>
  )
};

export default UseCallbackContainer4;