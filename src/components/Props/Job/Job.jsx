import React from 'react';

const Job = (props) => {
  console.log(props);
  props.jobName = 'Teacher';
  return(
    <>
      <p>My Job is {props.jobName}</p>
    </>
  )
}

export default Job;
