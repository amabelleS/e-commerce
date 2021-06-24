import React from 'react'
import { Route, Switch, useRouteMatch } from 'react-router-dom';

import CollectionsOverview from '../../components/collections-overview';
import CollectionPage from '../collection';

const ShopPage = () => {
  let { path } = useRouteMatch();
  // let {collectionId} = useParams()
  // console.log(path);
  return (
        <div className='shop-page'>
          <Switch>
            <Route exact path={`${path}`}>
              <CollectionsOverview />
            </Route>
          <Route path={`${path}/:collectionId`}>
            <CollectionPage />
          </Route>
          </Switch>
      </div>
    )}

export default ShopPage
