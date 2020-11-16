import React from 'react';
import { userContextMemo } from "../../../contexts/userContextMemo";

const UserB = React.memo(() => {
  const { userBName, setUserBName } = React.useContext(userContextMemo);
  console.log('rendering!! UserB');
  
  const handleInput = (e) => {
    setUserBName(e.target.value);
  }

  return (
    <>
      <h2>Component B Memo</h2>
      <div>name: {userBName}</div>
      <input onChange={ handleInput } />
    </>
  );
});

export default UserB;