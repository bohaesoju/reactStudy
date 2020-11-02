import * as React from 'react';

// const getAge = age => {
//   console.log("getAge");
//   return age;
// };

const UseMemo = () => {
  const [age, setAge] = React.useState('');

  const onChangeHandler = e => {
    if (e.target.id === "age") setAge(e.target.value);
  };
  
  return(
    <>
      <input id="age" value={age} onChange={onChangeHandler} />
      <p>저의 나이는 { age } 살 입니다.</p>
    </>
  )
}

export default UseMemo;
