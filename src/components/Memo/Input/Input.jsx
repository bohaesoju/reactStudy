import React from 'react';

const Input = (props) => {
  const { fruit, onChange } = props;
  console.log('Input Component Loaded');
  
  const handleInput = (e) => {
    onChange(e.target.value);
  };

  return (
    <div>
      <p>{fruit}</p> 
      <input value={fruit} onChange={handleInput} type="text"/>
    </div>
  );
};

export default React.memo(Input);
// export default Input;