import React from 'react';

const Counter = () => {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => 
    { document.title = `You clicked ${count} times`; }
  );

  const handleClick = () => {
    setCount(count + 1)
  }

  return(
    <>
      <p>You clicked {count} times</p> 
      <button onClick={ handleClick }>클릭</button>
    </>
  )
}

export default Counter;