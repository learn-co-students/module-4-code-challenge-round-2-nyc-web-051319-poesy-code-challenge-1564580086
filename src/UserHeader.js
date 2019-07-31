import React from 'react';

class UserHeader extends React.Component {
  render(){
    console.log(this.props.user)
    return (
      <div className="user-header">
        <h3>{this.props.user ? this.props.user : null}</h3>
        <button onClick={this.props.removeUser}>Logout</button>
      </div>
    );
  }
}

export default UserHeader;
