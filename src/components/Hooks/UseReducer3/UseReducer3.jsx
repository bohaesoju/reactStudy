import * as React from 'react';

const reducer = (state, action) => {
  return { 
    ...state,
    [action.name]: action.value
  };
}

const UseReducer3 = () => {
  const [state, dispatch] = React.useReducer(reducer, 
  { 
    job: '', 
    location: '' ,
    degree: ''
  })
  const { job, location, degree } = state;

  const handleInput = (event) => {
    dispatch(event.target)
  };

  return(
    <>
      <p>My Job is{ job }</p>
      <p>I'm live in { location }</p>
      <p>Graduate { degree }</p>
      <input 
        type="text"
        name={'job'}
        onChange={ handleInput }
        value={job}
      />
      <br/>
      <input 
        type="text"
        name={'location'}
        onChange={ handleInput }  
        value={location}
      />
      <br/>
      <input 
        type="text"
        name={'degree'}
        onChange={ handleInput }  
        value={degree}
      />
    </>
  )
}

export default UseReducer3;
