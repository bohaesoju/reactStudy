import React from 'react';
import Profile from '../../components/Profile';

const MainPage = () => {
  console.log('MAin Page!')
  const [name, setName] = React.useState('Uyjoong');
  return(
    <>
      <p>메인 페이지</p>
      <Profile name={ name } />
    </>
  )
}

export default MainPage;