import * as React from 'react';

const Profile = () => {
  const [profile, setProfile] = React.useState(
    {
      job: 'Developer',
      location: 'Seoul'
    });

  const handleInputJob = (e) => {
    setProfile({...profile, job: e.target.value})
  };

  const handleInputLocation = (e) => {
    setProfile({...profile, location: e.target.value})
  };

  return(
    <>
      <p>My Job is{ profile.job }</p>
      <p>I'm live in { profile.location }</p>
      <input 
        type="text"
        value={profile.job}
        onChange={handleInputJob}
      />
      <br />
      <input 
        type="text"
        value={profile.location}
        onChange={handleInputLocation}
      />
    </>
  )
}

export default Profile;
