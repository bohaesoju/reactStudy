import React from 'react';

const UseEffectCleanUp = () => {
  const [value, setValue] = React.useState(0)

  const handleButton = () => {
    setValue(value + 1)
  }

  React.useEffect(() => {
    console.log('useEffect')
    const id = setInterval(() => console.log(value), 1000);
    return () => {
      console.log('clearInterval')
      clearInterval(id)
    };
  }, [value])

  return(
    <>
      <button onClick={ handleButton }>증가</button>
    </>
  )
}

export default UseEffectCleanUp;