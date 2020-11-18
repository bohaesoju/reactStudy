import React from 'react';
import Profile3 from '../../components/Profile3';
import MainContext3Provider from "../../contexts/mainContext3";

const MainPage3 = () => {
  console.log('MAin Page!')

  return(
    <>
      <MainContext3Provider>
        <p>메인 페이지3</p>
        <Profile3 />
      </MainContext3Provider>
    </>
  )
}

export default MainPage3;