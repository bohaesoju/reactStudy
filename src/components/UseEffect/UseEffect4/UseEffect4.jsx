import React from 'react';
import Info from './Info';

const UseEffect4 = () => {
  const [visible, setVisible] = React.useState(false);

  const handleButton = () => {
    setVisible(!visible);
  }

  return(
    <>
      <button
        onClick={ handleButton }
      >
        { visible ? '숨기기' : '보이기'}
      </button>
      <br/>
      { visible && <Info /> }
    </>
  )
}

export default UseEffect4;