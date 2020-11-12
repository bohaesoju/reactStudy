import React from 'react';
import Info from './Info';

const UseEffect5 = () => {
  const [visible, setVisible] = React.useState(true);

  const handleButton = () => {
    setVisible(!visible);
  }

  return(
    <>
      <p>뒷정리 부수효과 UseEffect</p> 
      <button onClick={ handleButton }>토글버튼</button>
      { visible && <Info /> }
    </>
  )
}

export default UseEffect5;