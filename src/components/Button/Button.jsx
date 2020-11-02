import React from 'react';
import CreateElement from './CreateElement';
import JSX from './JSX';

const Button = () => {
  console.log(<a key={ 'key1 '} style={{ width: 100 }} href="http://google.com">링크</a>);
  console.log(<a key={ 'key2 '} style={{ width: 100 }} href="http://naver.com">링크2</a>);
  return(
    <>
      <CreateElement />
      <JSX />
    </>
  )
}

export default Button;
