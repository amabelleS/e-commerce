import React from 'react'
import { useRouteMatch, useParams } from 'react-router'
import { connect } from 'react-redux'

import { selectCollection } from '../../redux/shop/shop.selectors'

import './collection.styles.scss'

const CollectionPage = ({collection}) => {
    let { path } = useRouteMatch();
    let collectionId = useParams();
    console.log(collectionId);
    console.log('path: ' + path);
    // console.log(path, collectionId);
    return (
     <div className='Collection-page'>
        <h2>Collection Page</h2>
     </div>
    )
}

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);