import React from 'react';

const Hooks1 = () => {
  const [user, setUser] = React.useState(['UyJoong', 'JaRyong', 'SeYoung'])
  const [selectedUser, setSelectedUser] = React.useState('UyJoong')
  
  const showMessage = () => {
    alert('Followed ' + selectedUser);
  };

  const handleClick = () => {
    setTimeout(showMessage, 3000);
  };

  const handleSelect = (e) => {
    setSelectedUser(user[e.target.value])
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

export default Hooks1;