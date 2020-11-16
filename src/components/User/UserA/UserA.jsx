import React from 'react';
import { UserContext } from "../../../contexts/userContext";

const UserA = () => {
  const { userAName, setUserAName } = React.useContext(UserContext);
  console.log('rendering!! UserA');
  
  const handleInput = (e) => {
    setUserAName(e.target.value);
  }

  return (
    <>
      <h2>Component A</h2>
      <div>name: {userAName}</div>
      <input onChange={ handleInput } />
    </>
  );
}

export default UserA;