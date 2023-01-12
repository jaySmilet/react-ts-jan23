import * as React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../..';

const Profile = () => {
  const user = useSelector((state: RootState) => state.user.value);
  return (
    <div className="profile">
      <h3>Profile</h3>
      <p>Name-:{user.name}</p>
      <p>Age-:{user.age}</p>
      <p>Email-:{user.email}</p>
    </div>
  );
};
export default Profile;
