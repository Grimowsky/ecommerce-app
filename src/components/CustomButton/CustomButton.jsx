import * as React from 'react';
import './CustomButton.scss';

export const CustomButton = ({ children, ...otherProps }) => (
  <button className="customButton" type="submit" {...otherProps}>
    {children}
  </button>
);
