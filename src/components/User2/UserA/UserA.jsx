import React from 'react';
import { userContextMemo } from "../../../contexts/userContextMemo";

const UserA = React.memo(() => {
  const { userAName, setUserAName } = React.useContext(userContextMemo);
  console.log('rendering!! UserA');
  
  const handleInput = (e) => {
    setUserAName(e.target.value);
  }

  return (
    <>
      <h2>Component A Memo</h2>
      <div>name: {userAName}</div>
      <input onChange={ handleInput } />
    </>
  );
});

export default UserA;