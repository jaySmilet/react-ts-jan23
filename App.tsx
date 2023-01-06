import * as React from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import AddOilla from './components/AddOila/AddOila';
import Header from './components/header/header';
import OilaList from './components/OilaList/OilaList';
import useLocalStorage from './hooks/useLocalStorage';
import './style.scss';

export default function App() {
  const [oilas, setOilas] = useLocalStorage('oilas', []);
  return (
    <div>
      <Header />
      <Routes>
        <Route element={<OilaList />} path="/" exact={true} />
        <Route element={<AddOilla oila />} path="/add" />
      </Routes>
      <Outlet />
    </div>
  );
}
