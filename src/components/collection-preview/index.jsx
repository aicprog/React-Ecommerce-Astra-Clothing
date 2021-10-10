import React from 'react';
import { Link } from 'react-router-dom';
import CollectionItem from '../collection-item';
import './collection-preview.scss'

const CollectionPreview = ({ title, items }) => (

	<div className="collection-preview">
		<Link className="title" to={`${title ? `/shop/${title.toLowerCase()}`: "/shop" }`}>
			<h3>{title}</h3>
		</Link>

		<div className="preview">
			{items
				.filter((item, indx) => indx < 4)
				.map((item) => (
					<CollectionItem key={item.id} item={item} />
				))}
		</div>

        
	</div>
);
    
export default CollectionPreview;