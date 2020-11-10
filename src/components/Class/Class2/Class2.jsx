import React from 'react';

class Class2 extends React.Component {
  state = {
    user: 'Uyjoong',
  };

  render() {
    const state = this.state;

    const showMessage = (user) => {
      alert('Followed ' + state.user);
    };

    const handleClick = () => {
      setTimeout(showMessage, 3000);
    };

    return (
      <>
        <label>
          <b>Choose profile to view: </b>
          <select
            value={this.state.user}
            onChange={e => this.setState({ user: e.target.value })}
          >
            <option value="UyJoong">UyJoong</option>
            <option value="JaRyong">JaRyong</option>
            <option value="SeYoung">SeYoung</option>
          </select>
        </label>
        <p>
          <button onClick={handleClick}>팔로우</button>
        </p>
      </>
    )
  }
}

  export default Class2;