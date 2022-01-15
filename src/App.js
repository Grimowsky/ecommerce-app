import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import { Homepage } from './pages/HomePage/Homepage';

const Hats = () => <> hello </>;

export const App = () => (
  <Switch>
    <Route exact path="/" component={Homepage} />
    <Route exact path="/shop/hats" component={Hats} />
  </Switch>
);
