import React from 'react'

import CollectionItem from '../collection-item';

import './collection-preview.styles.scss';

const CollectionPreview  = ({ title, items }) => {
    return (
        <div className='collection-preview'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <div className='preview'>
               {items
                .filter((item, idx) => idx < 4)
                .map(({ id, ...otherItemProps }) => (
                 <CollectionItem key={id} {...otherItemProps} />
                // <p>{otherItemProps.name}</p>
                ))}
            </div>
        </div>
    )
}

export default CollectionPreview 
