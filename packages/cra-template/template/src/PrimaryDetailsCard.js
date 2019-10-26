import React, { Component } from 'react';
import UserContext from './UserContext';

class PrimaryDetailsCard extends Component {
  render() {
    return (
      <UserContext.Consumer>
        {userDetails => {
          return (
            <div>
              {userDetails.name}, {userDetails.dateJoined}
            </div>
          );
        }}
      </UserContext.Consumer>
    );
  }
}

export default PrimaryDetailsCard;
