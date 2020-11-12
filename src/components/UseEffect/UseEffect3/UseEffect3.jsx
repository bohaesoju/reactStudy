import React from 'react';

const UseEffect3 = () => {
  const [job, setJob] = React.useState('')
  const [location, setLocation] = React.useState('')
  const [information, setInformation] = React.useState(0)

  const handleInput = (e) => {
    setJob(e.target.value)
  }
  const handleInput2 = (e) => {
    setLocation(e.target.value)
  }

  React.useEffect(() => {
    console.log('글자수 수정')
    setInformation(job.length);
  }, [job])

  return(
    <>
      <label htmlFor="job">잡</label>
      <input 
        type="text"
        onChange={ handleInput }
        value={ job }
        id='job'
      />
      <span>{ information }</span>
      <br/>
      <label htmlFor="location">지역</label>
      <input 
        type="text"
        onChange={ handleInput2 }
        value={ location }
        id='location'
      />
    </>
  )
}

export default UseEffect3;