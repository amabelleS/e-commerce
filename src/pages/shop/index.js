import React from 'react'
import { Route } from 'react-router-dom';

import CollectionsOverview from '../../components/collections-overview';

const ShopPage = ({collections}) => (
        <div className='shop-page'>
        <CollectionsOverview />
           {/* {collections.map(({ id, ...otherCollectionProps }) => (
            <CollectionPreview key={id} {...otherCollectionProps} />
        ))} */}
      </div>
    )

export default ShopPage
