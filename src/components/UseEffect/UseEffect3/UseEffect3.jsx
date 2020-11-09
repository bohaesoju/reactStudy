import React from 'react';

const UseEffect3 = () => {
  const [job, setJob] = React.useState('')
  const [location, setLocation] = React.useState('')

  const handleInput = (e) => {
    setJob(e.target.value)
  }
  const handleInput2 = (e) => {
    setLocation(e.target.value)
  }

  React.useEffect(() => {
    console.log('Use Effect 부수 효과 렌더링 되었습니다.');
  }, [job])

  return(
    <>
      <input 
        type="text"
        onChange={ handleInput }
        value={ job }
      />
      <input 
        type="text"
        onChange={ handleInput2 }
        value={ location }
      />
    </>
  )
}

export default UseEffect3;