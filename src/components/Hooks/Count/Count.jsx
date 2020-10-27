import * as React from 'react';

const Count = () => {
  const [count, setCount] = React.useState(0);

  const handleCount = () => {
    console.log('handleCount Execute');
    setCount(count+1);
  };

  return(
    <>
      <div onClick={() => setCount(count + 1)}>{ count }</div>
      <button onClick={ handleCount }>값증가</button>
    </>
  )
}

export default Count;
