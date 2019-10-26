import React, { Component } from 'react';

class SecondaryDetailsCard extends Component {
  render() {
    const { userDetails } = this.props;
    return <div>{userDetails.address}</div>;
  }
}

export default SecondaryDetailsCard;
