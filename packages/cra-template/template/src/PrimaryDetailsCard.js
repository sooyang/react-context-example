import React, { Component } from 'react';

class PrimaryDetailsCard extends Component {
  render() {
    const { userDetails } = this.props;
    return (
      <div>
        {userDetails.name}, {userDetails.dateJoined}
      </div>
    );
  }
}

export default PrimaryDetailsCard;
