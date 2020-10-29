import * as React from 'react';

const Count2 = () => {
  const [count, setCount] = React.useState(0);

  const handleCount = () => {
    // setCount(count+1);
    // setCount(count+1);
    setCount(prevState => prevState + 1);
    setCount(prevState => prevState + 1);
  };

  return(
    <>
      <div>{ count }</div>
      <button onClick={ handleCount }>값증가</button>
    </>
  )
}

export default Count2;
