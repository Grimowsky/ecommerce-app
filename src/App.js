import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import { Homepage } from './pages/HomePage/Homepage';
import { ShopPage } from './pages/ShopPage/ShopPage';
import { Header } from './components/Header/Header';
import { SignInSignUp } from './pages/SingInSignUp/SignInSignUp';

export const App = () => (
  <>
    <Header />
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route path="/shop" component={ShopPage} />
      <Route path="/signin" component={SignInSignUp} />
    </Switch>
  </>
);
