import React from 'react';

const TitleChange = (props) => {
  const { productTitle, titleChange } = props;
  console.log('Title Component Loaded');

  const handleChange = (e) => {
    titleChange(e.target.value);
  }
  return (
    <div>
      <p>{ productTitle }</p>
      <span>타이틀 수정: </span><input type="text" onChange={ handleChange }/>
    </div>
  );
};

export default React.memo(TitleChange);