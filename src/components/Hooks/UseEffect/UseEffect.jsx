import * as React from 'react';
import { useEffect } from 'react';

const UseEffect = () => {
  const [profile, setProfile] = React.useState(
    {
      job: 'Developer',
      location: 'Seoul'
    });

  const handleInputChange = (name) => (e) => {
    setProfile({...profile, [name]: e.target.value})
  };

  // useEffect(() => {
  //   console.log('화면이 로딩 되었습니다.');
  //   console.log(profile);
  // });

  // useEffect(() => {
  //   console.log('화면이 로딩 되었습니다.');
  //   console.log(profile);
  // }, []);

  // useEffect(() => {
  //   console.log('화면이 렌더링 되었습니다.');
  //   console.log(profile.location);
  // }, [profile.location]);

  useEffect(() => {
    console.log('화면이 렌더링 되었습니다.');
    return () => {
      console.log('cleanup');
    }
  });

  return(
    <>
      <p>My Job is{ profile.job }</p>
      <p>I'm live in { profile.location }</p>
      <input 
        type="text"
        value={profile.job}
        onChange={handleInputChange('job')}
      />
      <br />
      <input 
        type="text"
        value={profile.location}
        onChange={handleInputChange('location')}
      />
    </>
  )
}

export default UseEffect;
