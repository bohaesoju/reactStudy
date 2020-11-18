import React from 'react';
import { MainContext } from "../../contexts/mainContext";

const Greeting = () => {
  console.log('rendering!! Greeting Component');
  const { name } = React.useContext(MainContext); //마치 useState 를 사용하듯

  return (
    <>
      <h2>Greeting 컴포넌트!</h2>
      <div>이름: {name}</div>
    </>
  );
};

export default Greeting;