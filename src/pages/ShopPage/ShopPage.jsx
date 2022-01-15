import * as React from 'react';
import { SHOP_DATA } from '../../SHOP_DATA';
import { CollectionPreview } from '../../components/CollectionPreview/CollectionPreview';

export const ShopPage = () => {
  const [products] = React.useState(SHOP_DATA);
  return (
    <div>
      {products.map(({ id, ...rest }) => (
        <CollectionPreview key={id} {...rest} />
      ))}
    </div>
  );
};
