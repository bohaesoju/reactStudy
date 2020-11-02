import React from 'react';

const INITIAL_JOB = 'Developer';

const CallbackRef2 = () => {
  const [job, setJob] = React.useState(INITIAL_JOB)
  const [toggleJob, setToggleJob] = React.useState(true)

  const handleInputChange = (e) => {
    setJob(e.target.value)
  }

  const handleButton = () => {
    setToggleJob(!toggleJob);
  }

  const handleRef = (ref) => {
    console.log('handleRef !');
    ref && setJob(INITIAL_JOB)
  }

  const setInitalJob = React.useCallback(handleRef, []);

  return(
    <>
    <button onClick={ handleButton } >토글버튼</button>
    {toggleJob && (
      <input 
        type="text" 
        ref={ setInitalJob }
        value={ job } 
        onChange={ handleInputChange }
      />)}
    </>
  )
}

export default CallbackRef2;