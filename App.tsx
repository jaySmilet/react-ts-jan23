import * as React from 'react';
import Login from './components/Login/Login';
import Profile from './components/Profile/Profile';
import './style.css';

export default function App() {
  return (
    <div className="app">
      <Login />
      <Profile />
    </div>
  );
}
