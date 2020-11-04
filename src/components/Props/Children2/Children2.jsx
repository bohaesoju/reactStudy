import React from 'react';

const Children2 = (props) => {
  console.log(props);
  return(
    <>
      <div>{props.children}</div>
    </>
  )
}

export default Children2;
