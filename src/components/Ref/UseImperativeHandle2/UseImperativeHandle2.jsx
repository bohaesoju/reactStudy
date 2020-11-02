import React from 'react';

const UseImperativeHandle2 = React.forwardRef((props, ref) => {
  const inputRefInside = React.useRef(null);

  React.useImperativeHandle(ref, () => ({
    getValue: () => inputRefInside.current.value,
    reset: () => inputRefInside.current.value='',
    focus: () => inputRefInside.current.focus()
  }), [inputRefInside]);

  return (
    <>
      <input type="text" ref={inputRefInside}/>
    </>
  );
})

export default UseImperativeHandle2;