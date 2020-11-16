import React from 'react';
import { userContextMemo } from "../../../contexts/userContextMemo";

const Greeting = () => {
  const { userAName, setUserAName } = React.useContext(userContextMemo);
  console.log('rendering!! Greeting Component');
  
  const handleInput = (e) => {
    setUserAName(e.target.value);
  }

  return (
    <>
      <h2>환영합니다!</h2>
      <div>name: {userAName}</div>
      <input onChange={ handleInput } />
    </>
  );
};

export default Greeting;