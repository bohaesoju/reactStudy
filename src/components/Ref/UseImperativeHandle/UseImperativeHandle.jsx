import React from 'react';

const UseImperativeHandle = React.forwardRef((props, ref) => {
  const [name, setName] = React.useState('Kim');
  const [count, setCount] = React.useState(0);

  React.useImperativeHandle(ref, () => ({
    getNameLength: () => name.length,
    addCount: value => setCount(count + value),
  }));

  return (
    <>
      <p>{`name is ${name}`}</p>
      <p>{`now count is ${count}`}</p>
    </>
  );
})

export default UseImperativeHandle;