import { createSelector } from 'reselect';
// import memoize from 'lodash.memoize';
// import collection from '../../pages/collection';

const selectShop = state => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  collections => Object.keys(collections).map(key => collections[key])
);

export const selectCollection =collectionUrlParam =>
  createSelector(
    [selectCollections],
    collections => collections[collectionUrlParam]
  );

//obsolete:
// export const selectCollection =memoize((collectionUrlParam) =>
//   createSelector(
//     [selectCollections],
//     collections => collections[collectionUrlParam]
//   ));

  // export const selectCollection = collectionUrlParam =>
  //   createSelector([selectCollections], collections => {
  //     return collections.find(collection => {
  //       return collection.routeName === collectionUrlParam
  //     })
  // });
