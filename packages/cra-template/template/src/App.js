import React from 'react';
import Profile from './Profile';
import UserContext from './UserContext';

const App = () => {
  const userDetails = {
    name: 'User1',
    address: 'NY',
    status: 'active',
    dateJoined: 'January 2019',
  };
  return (
    <UserContext.Provider value={userDetails}>
      <Profile userDetails={userDetails} />
    </UserContext.Provider>
  );
};

export default App;
