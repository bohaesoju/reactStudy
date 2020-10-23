import * as React from 'react';

const Count = () => {
  const [count, setCount] = React.useState(0);

  const handleCount = () => {
    setCount(count+1);
  };

  return(
    <>
      <div>{ count }</div>
      <button onClick={ handleCount }>값증가</button>
    </>
  )
}

export default Count;
