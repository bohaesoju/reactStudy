import React from 'react';

const Children = (props) => {
  console.log(props);
  return(
    <>
      <p>My Job is {props.children}</p>
    </>
  )
}

export default Children;
