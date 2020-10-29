import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Profile from './pages/Profile'

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login}/>
        <Route path="/dashboard" exact component={Dashboard}/>
        <Route path="/profile" exact component={Profile}/>
      </Switch>
    </BrowserRouter>
  )
}