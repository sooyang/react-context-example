import React, { Component } from 'react';
import PrimaryDetailsCard from './PrimaryDetailsCard';
import SecondaryDetailsCard from './SecondaryDetailsCard';

class Profile extends Component {
  render() {
    return (
      <React.Fragment>
        <PrimaryDetailsCard />
        <SecondaryDetailsCard />
      </React.Fragment>
    );
  }
}

export default Profile;
