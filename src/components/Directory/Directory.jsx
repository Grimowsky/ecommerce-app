import * as React from 'react';
import './Directory.scss';
import { sectionsData } from './config';
import { MenuItem } from '../MenuItem/MenuItem';

export const Directory = () => {
  const [sections] = React.useState(sectionsData);
  return (
    <div className="directory-menu">
      {sections.map((section) => (
        <MenuItem key={section.id} {...{ ...section }} />
      ))}
    </div>
  );
};
