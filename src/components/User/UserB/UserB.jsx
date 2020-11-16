import React from 'react';
import { UserContext } from "../../../contexts/userContext";

const UserB = () => {
  const { userBName, setUserBName } = React.useContext(UserContext);
  console.log('rendering!! UserB');
  
  const handleInput = (e) => {
    setUserBName(e.target.value);
  }

  return (
    <>
      <h2>Component A</h2>
      <div>name: {userBName}</div>
      <input onChange={ handleInput } />
    </>
  );
}

export default UserB;