import React from 'react';

const Content = (props) => {
  const { productContent } = props;
  console.log('Content Component Loaded')
  return (
    <div>
      <p>{ productContent }</p>
    </div>
  );
};

export default React.memo(Content);