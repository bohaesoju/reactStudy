import React from 'react';

const Title = (props) => {
  const { productTitle } = props;
  console.log('Title Component Loaded');
  return (
    <div>
      { productTitle }
    </div>
  );
};

export default React.memo(Title);