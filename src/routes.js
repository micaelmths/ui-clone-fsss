import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Dashboard from './pages/Dashboard'
import Login from './pages/Login'

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login}/>
        <Route path="/dashboard" exact component={Dashboard}/>
      </Switch>
    </BrowserRouter>
  )
}