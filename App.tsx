import * as React from 'react';
import CartContainer from './components/CartContainer/CartContainer';
import Navbar from './components/Navbar/Navbar';
import './style.css';

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <CartContainer />
    </div>
  );
}
