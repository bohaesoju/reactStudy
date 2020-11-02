import React from 'react';

const CreateElement = () => {
  const [like, setLike] = React.useState(false);
  const text = like ? '좋아요' : '싫어요';
  const handleClick = () => {
    setLike(!like);
  }

  return React.createElement(
    'button',
    { onClick: handleClick },
    text,
  )
};

export default CreateElement;