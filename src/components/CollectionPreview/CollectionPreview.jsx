import * as React from 'react';
import './CollectionPreview.scss';
import { CollectionItem } from '../CollectionItem/CollectionItem';

export const CollectionPreview = ({ title, items }) => (
  <div className="collectionPreview">
    <h1>{title}</h1>
    <div className="preview">
      {items
        .filter((item, index) => index < 4)
        .map(({ key, ...rest }) => (
          <CollectionItem key={key} {...rest}>
            {rest.name}
          </CollectionItem>
        ))}
    </div>
  </div>
);
