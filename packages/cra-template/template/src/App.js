import React from 'react';
import Profile from './Profile';

const App = () => {
  const userDetails = {
    name: 'User1',
    address: 'NY',
    status: 'active',
    dateJoined: 'January 2019',
  };
  return <Profile userDetails={userDetails} />;
};

export default App;
