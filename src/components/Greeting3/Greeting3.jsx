import React from 'react';
import { MainContext3 } from "../../contexts/mainContext3";

const Greeting3 = () => {
  console.log('rendering!! Greeting Component');
  const { name, setName } = React.useContext(MainContext3); //마치 useState 를 사용하듯

  const handleChange = (e) => {
    setName(e.target.value)
  };

  return (
    <>
      <h2>Greeting 컴포넌트!</h2>
      <div>이름: {name}</div>
      <input onChange={ handleChange } type="text"/>
    </>
  );
};

export default Greeting3;