import React from 'react'
import styled from 'styled-components'
import CollectionItem from '../../components/collection-item'
//redux
import { connect } from 'react-redux'
//selector
import { selectCollection } from '../../redux/shop/shop.selector'


const CollectionPage = ({collection}) => {


	React.useEffect(() => {
		window.scrollTo(0, 0);
	}, [])


	const { title, items } = collection;
    return (
			<CollectionWrapper>
				<h2 className="title">{title}</h2>
				<div className="items">
					{items.map((item) => (
						<CollectionItem key={item.id} item={item} />
					))}
				</div>
			</CollectionWrapper>
		);
}

const mapStateToProps = (state, ownProps) => ({
	collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage)

const CollectionWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	

	.title {
		font-size: 38px;
		margin: 0 auto 30px;
	}

	.items {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr;
		grid-gap: 10px;

		& .collection-item {
			margin-bottom: 30px;
		}
	}
`;
