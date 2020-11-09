import * as React from 'react';
import useInputs from './useInputs';

const CustomHook = () => {
  const [state, onChange] = useInputs({
    job: '',
    location: '',
    degree: '',
  });
  const { job, location, degree } = state;

  return(
    <>
      <p>My Job is{ job }</p>
      <p>I'm live in { location }</p>
      <p>Graduate { degree }</p>
      <input 
        type="text"
        name={'job'}
        onChange={ onChange }
        value={job}
      />
      <br/>
      <br/>
      <input 
        type="text"
        name={'location'}
        onChange={ onChange }  
        value={location}
      />
      <br/>
      <br/>
      <input 
        type="text"
        name={'degree'}
        onChange={ onChange }  
        value={degree}
      />
    </>
  )
}

export default CustomHook;
