import * as React from 'react';

const CountBatch = () => {
  const [first, setFirst] = React.useState(1);
  const [second, setSecond] = React.useState(2);
  const [third, setThird] = React.useState(3);
  const [total, setTotal] = React.useState(0);

  const handleCount = (prevState) => {
    console.log('handleCount 실행')
    setFirst(prevState => prevState + 1);
    setSecond(prevState => prevState + 1);
    setThird(prevState => prevState + 1);
    setTotal(first + second + third);
  };

  return(
    <>
      <div>{ total }</div>
      <button onClick={ handleCount }>값증가</button>
    </>
  )
}

export default CountBatch;
