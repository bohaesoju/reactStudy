import React from 'react';

const HooksRef = () => {
  const [user, setUser] = React.useState(['UyJoong', 'JaRyong', 'SeYoung'])
  const [selectedUser, setSelectedUser] = React.useState('UyJoong')
  const lastUser = React.useRef('');
  
  const showMessage = () => {
    alert('Followed ' + lastUser.current);
  };

  const handleClick = () => {
    setTimeout(showMessage, 3000);
  };

  const handleSelect = (e) => {
    setSelectedUser(user[e.target.value])
    lastUser.current = user[e.target.value];
  }

  return (
    <>
      <select
        onChange={ handleSelect }
      >
        { user.map((e, i) => {
          return <option value={ i }>{ e }</option>
        }) }
      </select>
      <br/>
      <br/>
      <button onClick={handleClick}>팔로우</button>
    </>
  );
}

export default HooksRef;