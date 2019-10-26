import React, { Component } from 'react';
import PrimaryDetailsCard from './PrimaryDetailsCard';
import SecondaryDetailsCard from './SecondaryDetailsCard';

class Profile extends Component {
  render() {
    const { userDetails } = this.props;
    return (
      <React.Fragment>
        <PrimaryDetailsCard userDetails={userDetails} />
        <SecondaryDetailsCard userDetails={userDetails} />
      </React.Fragment>
    );
  }
}

export default Profile;
