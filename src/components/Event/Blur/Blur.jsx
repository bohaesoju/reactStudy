import * as React from 'react';

const Blur = () => {
  const [count, setCount] = React.useState(0);

  const handleCount = () => {
    console.log('handleCount Execute');
    setCount(count+1);
  };

  const handleblur = () => {
    console.log('handleblur Execute');
  };

  return(
    <>
      <button 
        onClick={ handleCount }
        onBlur={ handleblur }
      >
        값증가
      </button>
    </>
  )
}

export default Blur;
