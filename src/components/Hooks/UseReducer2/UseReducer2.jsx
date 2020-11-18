import * as React from 'react';

const reducer = (state, action) => {
  switch(action.type){
    case 'SETJOB':
      return { 
        ...state,
        job: action.job
      };
    case 'SETLOCATION':
      return { 
        ...state,
        location: action.location
      };
    default:
      return state;  
  }
}

const INITIAL_STATE = { job: '', location: '' }

const UseReducer2 = () => {
  const [state, dispatch] = React.useReducer(reducer, INITIAL_STATE)

  const handleInput = (name) => (event) => {
    name === 'SETJOB' ? 
      dispatch({ type: name, job: event.target.value }) :
      dispatch({ type: name, location: event.target.value })
  };

  return(
    <>
      <p>My Job is{ state.job }</p>
      <p>I'm live in { state.location }</p>
      <span>Job: </span>
      <input 
        type="text"
        onChange={ handleInput('SETJOB') }
        value={state.job}
      />
      <br/>
      <br/>
      <span>Location: </span>
      <input 
        type="text"
        onChange={ handleInput('SETLOCATION') }  
        value={state.location}
      />
    </>
  )
}

export default UseReducer2;
