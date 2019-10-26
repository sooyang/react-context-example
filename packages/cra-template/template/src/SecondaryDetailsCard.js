import React, { Component } from 'react';
import UserContext from './UserContext';

class SecondaryDetailsCard extends Component {
  render() {
    return (
      <UserContext.Consumer>
        {userDetails => {
          return <div>{userDetails.address}</div>;
        }}
      </UserContext.Consumer>
    );
  }
}

export default SecondaryDetailsCard;
