import React from 'react';

const Count = React.forwardRef((props, ref) => {
  const [count, setCount] = React.useState(0);

  React.useImperativeHandle(ref, () => ({
    addCount: value => setCount(count + value),
  }));

  return (
    <>
      <p>{`now count is ${count}`}</p>
    </>
  );
})

export default Count;