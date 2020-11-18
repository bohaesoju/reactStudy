import React from 'react';
import Greeting from '../Greeting';

const Profile = () => {
  console.log('rendering!! Profile Component');

  return (
    <>
      <h2>프로파일 컴포넌트</h2>
      <Greeting />
    </>
  );
};

export default Profile;