import React from 'react';

class Class1 extends React.Component {
  state = {
    user: 'Uyjoong',
  };

  showMessage = () => {
    alert('Followed ' + this.state.user);
  };

  handleClick = () => {
    setTimeout(this.showMessage, 3000);
  };

  render() {
    return (
      <>
          <select
            value={this.state.user}
            onChange={e => this.setState({ user: e.target.value })}
          >
            <option value="UyJoong">UyJoong</option>
            <option value="JaRyong">JaRyong</option>
            <option value="SeYoung">SeYoung</option>
          </select>
        <p>
          <button onClick={this.handleClick}>팔로우</button>
        </p>
      </>
    )
  }
}

  export default Class1;