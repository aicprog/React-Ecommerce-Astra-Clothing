import React from 'react';
import CollectionItem from '../collection-item/collection-item.c';
import './collection-preview.s.scss'

const CollectionPreview = ({title, items}) => (
    <div className="collection-preview">
        <h1 className="title">{title}</h1>
        <div className="preview">
        {items
        .filter((item, indx) => indx < 4)
        .map(({id, ...otherItemProps}) => (
            <CollectionItem key={id} { ...otherItemProps}/>
        ))
        }
        
        </div>
    </div>
)
    
export default CollectionPreview;