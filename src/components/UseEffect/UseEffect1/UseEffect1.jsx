import React from 'react';

const UseEffect1 = () => {
  const [job, setJob] = React.useState('')

  const handleInput = (e) => {
    setJob(e.target.value)
  }

  React.useEffect(() => {
    console.log('Use Effect 부수 효과 렌더링 되었습니다.');
  })

  return(
    <>
      <input 
        type="text"
        onChange={ handleInput }
        value={ job }
      />
    </>
  )
}

export default UseEffect1;