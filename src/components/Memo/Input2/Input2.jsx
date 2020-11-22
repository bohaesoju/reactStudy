import React from 'react';

const Input2 = (props) => {
  const { count, onClick } = props;
  console.log('Input Component Loaded');

  const handleClick = () => {
    onClick()
  }

  return (
    <div>
      <p>{count}</p> 
      <button onClick={ handleClick }>증가</button>
    </div>
  );
};

export default React.memo(Input2);
