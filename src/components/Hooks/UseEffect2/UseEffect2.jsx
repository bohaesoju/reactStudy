import * as React from 'react';
import UseEffect from '../UseEffect';

const UseEffect2 = () => {
  const [visible, setVisible] = React.useState(false)

  const handleButton = () => {
    setVisible(!visible);
  };

  return(
    <>
      <button onClick={handleButton}>
        {visible ? '숨기기' : '보이기'}
      </button>
      {visible && <UseEffect />}
    </>
  )
}

export default UseEffect2;
