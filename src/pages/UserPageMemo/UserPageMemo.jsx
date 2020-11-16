import React from 'react';
import Profile from '../../components/Profile';
import UserContextMemoProvider from "../../contexts/userContextMemo";

const UserPageMemo = () => {
  const [count, setCount] = React.useState('0');

  const handleButton = () => {
    setCount(count + 1);
  };
  return(
    <>
    <p>유저 페이지 최적화</p>
    <UserContextMemoProvider>
      <Profile />
      <button onClick={ handleButton }>버튼</button>
    </UserContextMemoProvider>
    </>
  )
}

export default UserPageMemo;