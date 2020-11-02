import React from 'react';

const JSX = () => {
  const [like, setLike] = React.useState(false);
  const text = like ? '좋아요' : '싫어요';
  const handleClick = () => {
    setLike(!like);
  }
  return (
    <>
      <h1>JSX 컴포넌트</h1>
      <button onClick={ handleClick }>{ text }</button>
    </>
  )
};

export default JSX;