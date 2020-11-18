import React from 'react';
import Profile from '../../components/Profile';
import MainContextProvider from "../../contexts/mainContext";

const MainPage2 = () => {
  console.log('MAin Page!')

  return(
    <>
      <MainContextProvider>
        <p>메인 페이지2</p>
        <Profile />
      </MainContextProvider>
    </>
  )
}

export default MainPage2;