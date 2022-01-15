import * as React from 'react';
import './CollectionPreview.scss';

export const CollectionPreview = ({ title, items }) => (
  <div className="collectionPreview">
    <h1>{title}</h1>
    <div className="preview">
      {items
        .filter((item, index) => index < 4)
        .map((item) => (
          <div key={item.key}>{item.name}</div>
        ))}
    </div>
  </div>
);
