import React from 'react';
import Login from '../page/login/Login';
import { Redirect } from 'react-router-dom';

export default [
  {
    path: '/',
    exact: true,
    render: () => {
      return <Redirect to="/login" />
    }
  },
  {
    path: '/login',
    component: Login,
  }
]
