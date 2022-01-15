import * as React from 'react';
import './CollectionItem.scss';

export const CollectionItem = ({ name, price, imageUrl }) => (
  <div className="collectionItem">
    <div
      className="image"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    />
    <div className="collectionFooter">
      <span className="name"> {name} </span>
      <span className="price"> {price} </span>
    </div>
  </div>
);
