import React from 'react';

const Destructuring = (props) => {
  const { jobName, children } = props;
  console.log(props);
  return(
    <>
      <p>My Job is { jobName }</p>
      <p>나의 직업은 { children }</p>
    </>
  )
}

export default Destructuring;
