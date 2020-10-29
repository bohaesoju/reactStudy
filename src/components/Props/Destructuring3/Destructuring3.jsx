import React from 'react';

type Props = {
    jobName: string;
    children: string;
  };

const Destructuring3 = (props: Props) => {
  const { jobName, children } = props;  
  return(
    <>
      <p>My Job is { jobName }</p>
      <p>나의 직업은 { children }</p>
    </>
  )
}

export default Destructuring3;
