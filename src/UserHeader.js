import React from 'react';

class UserHeader extends React.Component {
  render(){
    const { currentUser, logout } = this.props

    return (
      <div className="user-header">
        <h3>Welcome, {currentUser}!</h3>
        {currentUser ? 
            <button onClick={logout}>Logout</button>
          : null}
      </div>
    ); 
  }
}

export default UserHeader;
