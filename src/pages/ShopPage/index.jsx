import React, {useState} from 'react';
import SHOP_DATA from '.';
import CollectionPreview from '../../components/collection-preview';




const ShopPage = () => {
    const [collections, setCollections] = useState(SHOP_DATA);
    return (
            <div className='shop-page'>
                {collections.map(({id, ...otherCollectionProps }) => (
                    <CollectionPreview key={id} {...otherCollectionProps}/>
                ))}
            </div>
    )
}

export default ShopPage



