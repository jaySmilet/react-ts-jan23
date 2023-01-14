import * as React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../..';
import ChangeColor, { color } from '../ChangeColor/ChangeColor';
import "./Profile.css"

const Profile = () => {
  const user = useSelector((state: RootState) => state.user.value);
  const themeColor:color = useSelector((state:RootState)=>state.theme.value);
  return (
    <div className={themeColor.name===`dark`?`profile dark`:`profile`}>
      <h3>Profile</h3>
      <ChangeColor />
      <p>Name-:{user.name}</p>
      <p>Age-:{user.age}</p>
      <p>Email-:{user.email}</p>
    </div>
  );
};
export default Profile;
