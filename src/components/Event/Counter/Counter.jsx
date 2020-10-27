import * as React from 'react';

const Counter = () => {
  const [count, setCount] = React.useState(0);

  const handleCount = () => {
    console.log('handleCount Execute');
    setCount(count+1);
  };

  const handleAlertClick = () => {
    console.log('handleAlertClick Execute');
    setTimeout(() => {
      alert('You clicked on: ' + count);
    }, 3000);
  };

  return(
    <>
      <p>{count}</p>
      <button onClick={ handleCount }>값증가</button>
      <button onClick={ handleAlertClick }>보기</button>
    </>
  )
}

export default Counter;
