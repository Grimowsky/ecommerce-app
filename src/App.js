import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import { Homepage } from './pages/HomePage/Homepage';
import { ShopPage } from './pages/ShopPage/ShopPage';

export const App = () => (
  <Switch>
    <Route exact path="/" component={Homepage} />
    <Route exact path="/shop" component={ShopPage} />
  </Switch>
);
