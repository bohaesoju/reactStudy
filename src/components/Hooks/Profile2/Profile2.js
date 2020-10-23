import * as React from 'react';

const Profile2 = () => {
  const [profile, setProfile] = React.useState(
    {
      job: 'Developer',
      location: 'Seoul'
    });

  const handleInputChange = (name) => (e) => {
    setProfile({...profile, [name]: e.target.value})
  };

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

export default Profile2;
