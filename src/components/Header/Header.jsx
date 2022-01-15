import * as React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Crown } from '../../assets/svg/crown.svg';

export const Header = () => (
  <div className="header">
    <Link to="/" className="logoContainer">
      <Crown className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/shop">
        CONTACT
      </Link>
    </div>
  </div>
);
