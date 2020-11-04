import React from 'react';
import Job from './Job';
import Job2 from './Job2';
import Children from './Children';
import Children2 from './Children2';
import Destructuring from './Destructuring';
import Destructuring2 from './Destructuring2';
import ToState from './ToState';

const Props = () => {
  const [inputValue, setInputValue] = React.useState('')
  const handleOnChangeValue = (value) => {
    console.log('Parent Component value', value);
    setInputValue(value)
  }

  return(
    <>
      {/* <Job jobName='Developer' /> */}
      {/* <Children jobName='Developer'>개발자</Children> */}
      {/* <Children2>
        <Job2 />
      </Children2> */}
      {/* <Destructuring jobName='Developer'>개발자</Destructuring> */}
      {/* <Destructuring2 jobName='Developer'>개발자</Destructuring2> */}
      <ToState 
        onChangeValue={ handleOnChangeValue }
        value={ inputValue }
      />
    </>
  )
}

export default Props;