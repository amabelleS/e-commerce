import React from 'react'
import { useRouteMatch, useParams, withRouter } from 'react-router'
import { connect } from 'react-redux'

import CollectionItem from '../../components/collection-item'

import { selectCollection } from '../../redux/shop/shop.selectors'

import './collection.styles.scss'

const CollectionPage = ({ collection, match}) => {
    const { title, items } = collection;
    // console.log(collection, collectionId);
    // console.log('match: ', match);
    let { path } = useRouteMatch();
    ;
    console.log('path: ' + path);
    return (
     <div className='Collection-page'>
        <h2 className='title'>{ title }</h2>
        <div className='items'>
            {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
        </div>
     </div>
    )
}
 
const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default withRouter(connect(mapStateToProps)(CollectionPage));