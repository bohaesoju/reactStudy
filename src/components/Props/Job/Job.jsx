import React from 'react';

const Job = (props) => {
  console.log(props);
  return(
    <>
      <p>My Job is{props.jobName}</p>
    </>
  )
}

export default Job;
