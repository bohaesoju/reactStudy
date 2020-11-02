import React from 'react';

const JSX = () => {
  const [like, setLike] = React.useState(false);
  const text = like ? '좋아요' : '싫어요';
  const handleClick = () => {
    setLike(!like);
  }
  return (
    <button onClick={ handleClick }>{ text }</button>
  )
};

export default JSX;