import React from 'react';
import UserA from '../../components/User/UserA';
import UserB from '../../components/User/UserB';
import UserContextProvider from "../../contexts/userContext";

const UserPage = () => {
  return(
    <>
    <p>유저 페이지</p>
    <UserContextProvider>
      <UserA />
      {/* <UserB /> */}
    </UserContextProvider>
    </>
  )
}

export default UserPage;