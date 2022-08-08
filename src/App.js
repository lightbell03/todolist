import React, { useState, useEffect } from 'react';
import './App.css';
import Login from './pages/Login';
import Todo from './pages/Todo';
import { Routes, Route, Outlet, useLocation } from 'react-router-dom';

export default function App() {
  const location = useLocation();

  const user = location.state === null ? false : location.state.isLogin;

  const Layout = () => {
    return (
      <Outlet />
    )
  }

  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={ user ? <Todo /> : <Login />} />
        </Route>
      </Routes>
    </div>
  );
}