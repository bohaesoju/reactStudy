import React from 'react';
import Job from './Job';
import Children from './Children';
import Destructuring from './Destructuring';
import Destructuring2 from './Destructuring2';
import ToState from './ToState';

const Props = () => {
  const handleOnChangeValue = (value) => {
    console.log('Parent Component value', value);
  }
  return(
    <>
      {/* <Job jobName='Developer' /> */}
      {/* <Children jobName='Developer'>개발자</Children> */}
      {/* <Destructuring jobName='Developer'>개발자</Destructuring> */}
      {/* <Destructuring2 jobName='Developer'>개발자</Destructuring2> */}
      <ToState 
        onChangeValue={ handleOnChangeValue }
      />
    </>
  )
}

export default Props;