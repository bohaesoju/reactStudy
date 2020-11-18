import React from 'react';

const SetInterval = () => {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    const id = setInterval(() => {
      setCount(e => e + 1);
    }, 1000);
    
    return () => clearInterval(id)
  }, []);

  return(
    <>
      <h1>{ count }</h1>
    </>
  )
}

export default SetInterval;