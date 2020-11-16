import React from 'react';
import Greeting from './Greeting';

const Profile = React.memo(() => {
  console.log('rendering!! Profile Component');

  return (
    <>
      <h2>프로파일</h2>
      <Greeting />
    </>
  );
});

export default Profile;