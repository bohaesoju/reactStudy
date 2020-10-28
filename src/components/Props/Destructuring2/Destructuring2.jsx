import React from 'react';

const Destructuring2 = ({ jobName, children }) => {
  return(
    <>
      <p>My Job is { jobName }</p>
      <p>나의 직업은 { children }</p>
    </>
  )
}

export default Destructuring2;
